# Web Analytics

Web Analytics provides a simplified script to process a large Google Analytics export and return CSV and JSON files which show the top pages visited on each hostname. Within index.js, one can change the file to process as well as the number of pages to return for each hostname.

## Prerequisites

- Access to Govt-wide version of Digital Analytics Program
- Nodejs

## Fetching Google Analytics Data

- Navigate to Google Analytics
- Select GSA Agency Profile
- In left-hand pane, select Behavior > Site Content > All Pages
- Set date range to desired range (typically 1 year)
- Set Primary Dimension = Hostname
- Set Secondary Dimension = Page
- From top right of page, click Export > Unsampled Report
- Here you can set a recurrence and the file name
- Google will email once file is ready for consumption

## Consolidating Output

- Update `topXPages` and `inputFilePath` variables to the number and file you desire.
- `node index.js`
- Outputs will land in `data/outputs/mostViewedPages_{date}.csv/json`

## Output

| Hostname  | Page              | Pageviews | Unique Pageviews | Avg. Time on Page  | Entrances | Bounce Rate          | % Exit               | Page Value |
| --------- | ----------------- | --------- | ---------------- | ------------------ | --------- | -------------------- | -------------------- | ---------- |
| a.gsa.gov | a.gsa.gov/        | 407133155 | 173141159        | 688.03241029778553 | 172492202 | 0.75709829213890778  | 0.4241883027187997   | 0          |
| a.gsa.gov | a.gsa.gov/page1   | 7164377   | 3482436          | 557.46385645761256 | 3393629   | 0.6891890219466773   | 0.48052482441948546  | 0          |
| b.gsa.gov | b.gsa.gov/        | 86064669  | 62065840         | 49.411625933451624 | 660430    | 0.16192519750022336  | 0.10919075282796939  | 0          |
| b.gsa.gov | b.gsa.gov/search/ | 19887572  | 12071187         | 3.8346169029707995 | 3441875   | 0.042369852816841254 | 0.011089538733033876 | 0          |
