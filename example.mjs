import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor("swissalpinedata/arbeitsagentur-jobs-scraper").call({
  "was": "Softwareentwickler",
  "wo": "Berlin",
  "umkreis": 25,
  "maxItems": 20
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(JSON.stringify(items, null, 2));
console.log(`${items.length} records`);
