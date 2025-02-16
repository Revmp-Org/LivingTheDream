import { type SchemaTypeDefinition } from 'sanity';
import globalConfig from './global-config'
import homeConfig from './home-config';
import aboutConfig from './about-config';
import contactConfig from './contact-config';
import servicesConfig from './services-config';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    globalConfig,
    homeConfig,
    aboutConfig,
    contactConfig,
    servicesConfig
  ],
};
