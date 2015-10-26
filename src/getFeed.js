import {r2j} from 'rsj';

import {feed} from './config';

export default async () => new Promise((resolve) => r2j(feed, (json) => resolve(JSON.parse(json))));
