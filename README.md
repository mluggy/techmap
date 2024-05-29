# Israeli Tech Companies Map

Welcome! This project aims to help Israelis find hi-tech jobs near their homes, minimizing commute and wasted time. The map is hosted at <a href="https://maphub.net/mluggy/techmap" target="_blank">(https://maphub.net/mluggy/techmap).</a>

![Techmap](techmap.gif)

## Project Overview

The main point-of-truth for this project is <a href="https://ica.justice.gov.il/GenericCorporarionInfo/SearchCorporation?unit=8" target="_blank">Rasham Havarot / רשם החברות.</a> Please provide the current company number (ח.פ) whenever adding, updating or deleting your company. Note: only locally registered, non-violating companies are included in the final map.

## Adding, Updating, or Deleting Your Company

To contribute to this project by adding, updating, or deleting your company information, you can use one of the following methods:

### Method 1: Fork and Clone (Recommended)

1. **Fork the repository**: Click the "Fork" button on the top right of this page.
2. **Clone your forked repository**: Open your terminal and run:
   ````bash
   git clone https://github.com/yourusername/techmap.git```
   ````
3. **Create a new branch** for your changes:
   ````bash
   git checkout -b add-company```
   ````
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
     "isHiring": true,
     "linkedinId": "acme",
     "crunchbaseId": "acme",
     "finderId": "acme-ltd",
     "xId": "acmetw",
     "addresses": [
       {
         "street": "דיזינגוף",
         "houseNumber": "99",
         "city": "תל אביב - יפו",
         "lat": 32.07956669622025,
         "lon": 34.77373112886606
       }
     ]
   }
   ```

- **name:** The name of the company appearing on the map (avoid adding Ltd, Limited, or Company at the end).
- **description:** The company's tagline or mission statement, preferably a one-liner with no superfluous adjectives and exaggerations.
- **categoryId:** Should be picked from [categories.json.](categories.json)
- **size:** Should be picked from [sizes.json.](sizes.json)
- **logoFile:** Should point to a 200x200 png, gif, jpg, or webp file uploaded to the [logos/](logos/) folder.
- **websiteUrl:** The company's homepage address.
- **careersUrl:** The company's careers/job page address.
- **isHiring:** Should be true only if you're actively hiring.
- **linkedinId, crunchbaseId, finderId and xId:** The company IDs (not full URLs) from <a href="https://www.linkedin.com/" target="_blank">LinkedIn,</a> <a href="https://www.crunchbase.com/" target="_blank">Crunchbase,</a> <a href="https://finder.startupnationcentral.org/" target="_blank">Startup Finder</a> and <a href="https://x.com" target="_blank">X/Twitter.</a>
- **addresses:** Aמ array specifying one or more physical locations. Each object should contain at least city and preferably street and houseNumber. Our system will do geo mapping, but you can specify your own lat and lon.

5. **Commit your changes:**

```bash
git add .
git commit -m "Added/Updated company Acme"
```

6. **Push to your fork:**

```bash
git push origin add-company
```

7. **Create a pull request** on Github.

### Method 2: Submit an Issue

You can also request an addition, update, or deletion through the repository's [Issues page.](https://github.com/mluggy/techmap/issues) Enter as many details as possible, and someone will pick it up for you, hopefully.

### Method 3: Express (Paid) Listing

If you would like your listing to be added or updated promptly, I offer an express (paid) option for your convenience. <a href="https://mrng.to/0UqeX19y8t" target="_blank">After a small contribution,</a> I will personally reach out to you via email to confirm the details.

## License

This project is licensed under the <a href="https://opendatacommons.org/licenses/odbl/1-0/" target="_blank">Open Database License (ODbL) v1.0.</a> You are free to:

- **Share:** Copy and redistribute the material in any medium or format.
- **Adapt:** Remix, transform, and build upon the material for any purpose, even commercially.

However, you must attribute the original creator by crediting Michael Lugassy and providing a link to this project. If you modify or build upon the data, you must distribute your contributions under the same license as the original.

## Acknowledgements

Thank you to everyone who updates the map and helps with this project. Special thanks to those who provide comments and suggestions. I hope that this tool will be useful for job seekers and beneficial for the companies listed.

Happy job hunting! ❤️

Michael Lugassy

Follow me on [LinkedIn](https://www.linkedin.com/in/mluggy/) & [Twitter/X](https://x.com/mluggy)
