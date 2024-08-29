# Israeli Tech Companies Map

Welcome! This project aims to help Israelis find hi-tech jobs near their homes, minimizing commute and wasted time. Both the <a href="https://maphub.net/mluggy/techmap" target="_blank">Companies Map</a> and the <a href="https://maphub.net/mluggy" target="_blank">Job Maps</a> are updated using this repo data.

![Techmap](techmap.gif)

**New: [Donate here](https://mrng.to/0UqeX19y8t) to get your company listed/updated ASAP** (you can also follow the instructions below to do it yourself).

## Project Overview

The main point-of-truth for this project is <a href="https://ica.justice.gov.il/GenericCorporarionInfo/SearchCorporation?unit=8" target="_blank">Rasham Havarot / רשם החברות.</a> Please provide the current company number (ח.פ) whenever adding, updating or deleting your company. Note: only locally registered, non-violating companies are included in the final map.

## Adding, Updating, or Deleting Your Company

Contribute to this project by adding, updating, or deleting any company information.

### Method 1: Fork and Clone (Recommended)

1. **Fork the repository**
2. **Clone your forked repository:**
   ```bash
   git clone https://github.com/yourusername/techmap.git
   ```
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b add-company
   ```
4. Add or edit a company JSON file named after your company's number (e.g., 513674309.json) in the companies/ directory. Use the following template:
   ```json
   {
     "name": "Acme",
     "description": "Acme description",
     "categoryId": 3,
     "size": "m",
     "logoFile": "logos/acme-logo.webp",
     "websiteUrl": "https://www.example.com/",
     "careersUrl": "https://www.example.com/careers",
     "linkedinId": "acme",
     "linkedinNum": 12345678,
     "crunchbaseId": "acme",
     "finderId": "acme-ltd",
     "xId": "acmetw",
     "facebookId": "acmepage",
     "addresses": [
       {
         "street": "דיזינגוף",
         "houseNumber": "99",
         "city": "תל אביב - יפו",
         "lat": 32.07956669622025,
         "lon": 34.77373112886606
       }
     ],
     "comeetId": "acme/AF.100",
     "greenhouseId": "acme",
     "breezyId": "acme",
     "leverId": "acme",
     "isMultinational": false
   }
   ```

- **name:** The name of the company appearing on the map (avoid adding Ltd, Limited, or Company at the end).
- **description:** The company's tagline or mission statement, preferably a one-liner with no superfluous adjectives and exaggerations.
- **categoryId:** Should be picked from [categories.json.](categories.json)
- **size:** Should be picked from [sizes.json.](sizes.json)
- **logoFile:** Should point to a 200x200 png, gif, jpg, or webp file uploaded to the [logos/](logos/) folder.
- **websiteUrl:** The company's homepage address.
- **careersUrl:** The company's careers/job page address.
- **linkedinId, crunchbaseId, finderId, xId and facebookId:** The company IDs (not full URLs) from <a href="https://www.linkedin.com/" target="_blank">LinkedIn,</a> <a href="https://www.crunchbase.com/" target="_blank">Crunchbase,</a> <a href="https://finder.startupnationcentral.org/" target="_blank">Startup Finder</a>, <a href="https://x.com" target="_blank">X/Twitter</a> and <a href="https://www.facebook.com/" target="_blank">Facebook.</a>
- **linkedinNum:** The company numerical ID from <a href="https://www.linkedin.com/" target="_blank">LinkedIn.</a> This is NOT your Linkedin ID (can be found when viewing your company page source, looking for "fsd_company:"). Used to scrape your Linkedin jobs.
- **comeetId, greenhouseId, breezyId and/or leverId:** The company IDs (not full URLs) of your ATS platform. Used to scrape your ATS jobs.
- **addresses:** An array specifying one or more physical locations. Each object should contain at least city and preferably street and houseNumber. The map will do the geocoding automatically, or you can specify your own latitude and longitude.
- **isMultinational:** True/False if company is a multi-national company.

5. **Commit your changes:**

```bash
git add .
git commit -m "Added/Updated company Acme"
```

6. **Push to your fork:**

```bash
git push origin add-company
```

7. **Create a pull request**

### Method 2: Submit an Issue

You can also request an addition, update, or deletion through the repository's [Issues page.](https://github.com/mluggy/techmap/issues) Enter as many details as possible, and someone will pick it up for you, eventually.

### Method 3: Donate

If you would like your listing to be added or updated promptly, I offer an express (paid) option for your convenience. <a href="https://mrng.to/0UqeX19y8t" target="_blank">After a small contribution,</a> I will personally reach out to you via email to confirm the details.

## License

This project is licensed under the <a href="https://opendatacommons.org/licenses/odbl/1-0/" target="_blank">Open Database License (ODbL) v1.0.</a> You are free to:

- **Share:** Copy and redistribute the material in any medium or format.
- **Adapt:** Remix, transform, and build upon the material for any purpose, even commercially.

However, you must attribute the original creator by crediting Michael Lugassy and providing a link to this project. If you modify or build upon the data, you must distribute your contributions under the same license as the original.

## Acknowledgements

Thank you to everyone who updates the map and helps with this project. Special thanks to those who provided comments and suggestions. I hope this tool proves useful for both job seekers and companies listed.

Happy job hunting! ❤️

Michael Lugassy

Follow me on <a href="https://www.linkedin.com/in/mluggy/" target="_blank">LinkedIn</a> & <a href="https://x.com/mluggy" target="_blank">X/Twitter.</a>
