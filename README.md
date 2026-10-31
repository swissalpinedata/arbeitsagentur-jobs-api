# Arbeitsagentur Jobsuche API: German jobs from the Bundesagentur für Arbeit in Python and Node

Get German jobs from the **Jobbörse of the Bundesagentur für Arbeit** (Jobsuche API) as clean JSON. The [Arbeitsagentur Jobs Scraper](https://apify.com/swissalpinedata/arbeitsagentur-jobs-scraper) on Apify handles the API key header, paging, retries and the optional detail call for full descriptions.

Pay per result, no subscription, no login and no proxy setup. New Apify accounts get free monthly credit, which covers a few thousand results.

## Quick start

1. Create a free account on [Apify](https://apify.com) and copy your API token from Settings, Integrations.
2. `export APIFY_TOKEN=your_token`
3. Run one of the examples below.

### Python

```bash
pip install apify-client
python example.py
```

```python
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])
run = client.actor("swissalpinedata/arbeitsagentur-jobs-scraper").call(run_input={
    "was": "Softwareentwickler",
    "wo": "Berlin",
    "umkreis": 25,
    "maxItems": 20
})

for item in client.dataset(run.default_dataset_id).iterate_items():
    print(item)
```

### Node.js

```bash
npm install apify-client
node example.mjs
```

```js
import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const run = await client.actor("swissalpinedata/arbeitsagentur-jobs-scraper").call({
  "was": "Softwareentwickler",
  "wo": "Berlin",
  "umkreis": 25,
  "maxItems": 20
});
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

### curl

```bash
curl -X POST "https://api.apify.com/v2/acts/swissalpinedata~arbeitsagentur-jobs-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"was": "Softwareentwickler", "wo": "Berlin", "umkreis": 25, "maxItems": 20}'
```

## Example output

One record looks like this:

```json
{
  "source": "arbeitsagentur",
  "refnr": "12016-10005207786-S",
  "url": "https://www.arbeitsagentur.de/jobsuche/jobdetail/12016-10005207786-S",
  "external_url": null,
  "title": "Softwareentwickler m/w/d *",
  "profession": "Softwareentwickler/in",
  "all_professions": "Softwareentwickler/in, Datenbankentwickler/in",
  "employer": "PerZukunft Arbeitsvermittlung GmbH & Co. KG",
  "location_city": "Berlin",
  "location_zip": "12163",
  "location_region": "BERLIN",
  "location_country": "DEUTSCHLAND",
  "latitude": 52.462501889,
  "longitude": 13.31995116,
  "location_count": 1,
  "published_at": "2026-08-31",
  "entry_date": "2026-09-03",
  "modified_at": "2026-08-31T13:01:15.045",
  "offer_type": "ARBEIT",
  "contract_duration": "KEINE_ANGABE",
  "fixed_term_months": null,
  "salary_from": 30.26,
  "salary_to": 30.26,
  "salary_type": "STUNDENLOHN",
  "salary_unit": "FESTGEHALT",
  "fulltime": true,
  "part_time": null,
  "shift_work": null,
  "homeoffice_possible": null,
  "minijob": false,
  "career_changer_ok": false,
  "temp_agency": false,
  "description": "Ab [sofort] suchen wir einen Softwareentwickler m/w/d in Vollzeit für eine mittelständige Papierfabrik in Berlin - Neukölln. Ihr Einstiegsgehalt liegt bei [30,26] €/h. ...",
  "scraped_at": "2026-09-22T20:31:33.966978+00:00"
}
```

## What you can build

* Job market analysis by region or profession
* German job boards and aggregators
* Lead lists of hiring employers
* Daily monitoring with `veroeffentlichtseit: 1`

## Schedules and integrations

On Apify you can save this input as a task, run it on a schedule (for example every morning) and send new results to Google Sheets, Slack, a webhook, Make, n8n or Zapier without writing code. All input fields are documented on the [actor page](https://apify.com/swissalpinedata/arbeitsagentur-jobs-scraper).

## More Swiss and DACH data APIs

* [swiss-jobs-api](https://github.com/swissalpinedata/swiss-jobs-api): Swiss Jobs API
* [zefix-api-python](https://github.com/swissalpinedata/zefix-api-python): Zefix API in Python
* [austria-jobs-api](https://github.com/swissalpinedata/austria-jobs-api): Austria Jobs API
* [flatfox-api-python](https://github.com/swissalpinedata/flatfox-api-python): Flatfox API
* [personio-jobs-api](https://github.com/swissalpinedata/personio-jobs-api): Personio, Workable, Recruitee, SmartRecruiters and Teamtailor jobs API in Python and Node

## License

The example code in this repo is MIT licensed. The data comes from public sources; you are responsible for using it in line with the GDPR and the terms of the source sites.
