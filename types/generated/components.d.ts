import type { Schema, Struct } from '@strapi/strapi';

export interface AboutStoryBlock extends Struct.ComponentSchema {
  collectionName: 'components_about_story_blocks';
  info: {
    displayName: 'Story Block';
    icon: 'quote';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    eyebrow: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutPageHero extends Struct.ComponentSchema {
  collectionName: 'components_layout_page_heroes';
  info: {
    displayName: 'Page Hero';
    icon: 'brush';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    eyebrow: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsConsultation extends Struct.ComponentSchema {
  collectionName: 'components_sections_consultations';
  info: {
    displayName: 'Consultation';
    icon: 'form';
  };
  attributes: {
    body: Schema.Attribute.RichText;
    emailLabel: Schema.Attribute.String;
    errorMessage: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    formEndpoint: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images'>;
    messageLabel: Schema.Attribute.String;
    nameLabel: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    reasons: Schema.Attribute.Component<'shared.list-item', true>;
    reasonsHeading: Schema.Attribute.String;
    serviceLabel: Schema.Attribute.String;
    services: Schema.Attribute.Component<'shared.list-item', true>;
    submitLabel: Schema.Attribute.String;
    successMessage: Schema.Attribute.Text;
  };
}

export interface SectionsFeaturesGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_features_grids';
  info: {
    displayName: 'Features Grid';
    icon: 'grid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    features: Schema.Attribute.Component<'shared.feature-card', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
    icon: 'sun';
  };
  attributes: {
    badge: Schema.Attribute.String;
    primaryCta: Schema.Attribute.Component<'shared.link', false>;
    secondaryCta: Schema.Attribute.Component<'shared.link', false>;
    slides: Schema.Attribute.Component<'shared.carousel-slide', true>;
  };
}

export interface SectionsTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonials';
  info: {
    displayName: 'Testimonials';
    icon: 'comment';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.testimonial', true>;
  };
}

export interface SharedCarouselSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_carousel_slides';
  info: {
    displayName: 'Carousel Slide';
    icon: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCategoryLabel extends Struct.ComponentSchema {
  collectionName: 'components_shared_category_labels';
  info: {
    displayName: 'Category Label';
    icon: 'priceTag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.UID<'label'> & Schema.Attribute.Required;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    addressLine1: Schema.Attribute.String;
    addressLine2: Schema.Attribute.String;
    city: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    state: Schema.Attribute.String;
  };
}

export interface SharedCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_blocks';
  info: {
    displayName: 'CTA Block';
    icon: 'cursor';
  };
  attributes: {
    body: Schema.Attribute.Text;
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_cards';
  info: {
    displayName: 'Feature Card';
    icon: 'rocket';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Enumeration<
      ['leaf', 'droplets', 'sun', 'users', 'shovel', 'award']
    > &
      Schema.Attribute.DefaultTo<'leaf'>;
    styleVariant: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFormConfig extends Struct.ComponentSchema {
  collectionName: 'components_shared_form_configs';
  info: {
    displayName: 'Form Config';
    icon: 'cursor';
  };
  attributes: {
    consentText: Schema.Attribute.Text;
    emailLabel: Schema.Attribute.String;
    endpoint: Schema.Attribute.String;
    errorMessage: Schema.Attribute.Text;
    messageLabel: Schema.Attribute.String;
    nameLabel: Schema.Attribute.String;
    phoneLabel: Schema.Attribute.String;
    serviceLabel: Schema.Attribute.String;
    services: Schema.Attribute.Component<'shared.list-item', true>;
    submitLabel: Schema.Attribute.String;
    successMessage: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'List Item';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'share';
  };
  attributes: {
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
    icon: 'number';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'chat';
  };
  attributes: {
    author: Schema.Attribute.String & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images'>;
    quote: Schema.Attribute.Text & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      > &
      Schema.Attribute.DefaultTo<5>;
    role: Schema.Attribute.String;
  };
}

export interface SharedValue extends Struct.ComponentSchema {
  collectionName: 'components_shared_values';
  info: {
    displayName: 'Value';
    icon: 'bookmark';
  };
  attributes: {
    description: Schema.Attribute.Text;
    iconKey: Schema.Attribute.Enumeration<
      [
        'user',
        'book',
        'check',
        'clock',
        'leaf',
        'sun',
        'award',
        'droplets',
        'shovel',
        'users',
      ]
    > &
      Schema.Attribute.DefaultTo<'user'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.story-block': AboutStoryBlock;
      'layout.page-hero': LayoutPageHero;
      'sections.consultation': SectionsConsultation;
      'sections.features-grid': SectionsFeaturesGrid;
      'sections.hero': SectionsHero;
      'sections.testimonials': SectionsTestimonials;
      'shared.carousel-slide': SharedCarouselSlide;
      'shared.category-label': SharedCategoryLabel;
      'shared.contact': SharedContact;
      'shared.cta-block': SharedCtaBlock;
      'shared.feature-card': SharedFeatureCard;
      'shared.form-config': SharedFormConfig;
      'shared.link': SharedLink;
      'shared.list-item': SharedListItem;
      'shared.social-link': SharedSocialLink;
      'shared.stat': SharedStat;
      'shared.testimonial': SharedTestimonial;
      'shared.value': SharedValue;
    }
  }
}
