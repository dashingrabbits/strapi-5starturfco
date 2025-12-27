export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Attempt to auto-allow public read access for key content types.
    try {
      const publicRole = await strapi
        .query("plugin::users-permissions.role")
        .findOne({ where: { type: "public" }, populate: ["permissions"] });

      if (!publicRole) {
        return;
      }

      const actions = [
        "api::global.global.find",
        "api::global.global.findOne",
        "api::home-page.home-page.find",
        "api::home-page.home-page.findOne",
        "api::about-page.about-page.find",
        "api::about-page.about-page.findOne",
        "api::contact-page.contact-page.find",
        "api::contact-page.contact-page.findOne",
        "api::projects-page.projects-page.find",
        "api::projects-page.projects-page.findOne",
        "api::project.project.find",
        "api::project.project.findOne",
        "api::project-category.project-category.find",
        "api::project-category.project-category.findOne",
      ];

      for (const action of actions) {
        const subject = action.replace(/\.find(One)?$/, "");
        const existing = await strapi
          .query("plugin::users-permissions.permission")
          .findOne({
            where: {
              action,
              role: publicRole.id,
            },
          });

        if (existing) {
          if (!existing.enabled) {
            await strapi
              .query("plugin::users-permissions.permission")
              .update({
                where: { id: existing.id },
                data: { enabled: true },
              });
          }
        } else {
          await strapi.query("plugin::users-permissions.permission").create({
            data: {
              action,
              role: publicRole.id,
              enabled: true,
              subject,
              properties: {},
              conditions: [],
            },
          });
        }
      }
    } catch (error) {
      strapi.log.warn(
        `Could not auto-enable public permissions: ${error.message}`
      );
    }
  },
};
