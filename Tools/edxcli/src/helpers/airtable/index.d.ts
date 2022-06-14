export type ATWebsite = {
  id: string;
  createdTime: Date;
  fields: ATWebsiteFields;
};

export type ATWebsiteFields = {
  Site?: string;
  'USWDS, Performance'?: string[];
  Office?: string;
  'Sub-Office'?: string;
  Active?: boolean;
  'Touchpoints URL'?: string;
  'Prod Status'?: string;
  'Type of Domain'?: string;
  'Digital Brand Category'?: string;
  'Statuscard Score - Customer Centricity'?: string | number;
  'Statuscard Score - Mobile Performance Rollup (fromUSWDS, Performance)'?:
    | string
    | number;
  'Statuscard Score - AMP'?: string | number;
  'Statuscard Score - GA data'?: string | number;
  'Statuscard Score - USWDS'?: string | number;
  'Statuscard Score - Required Links'?: string | number;
};
