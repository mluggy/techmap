# Israeli Tech Map

Welcome! This project helps Israelis find hi-tech jobs near their homes, minimizing commute and wasted time.

Both the <a href="https://maphub.net/mluggy/techmap" target="_blank">companies map</a> and <a href="https://maphub.net/mluggy" target="_blank">job maps</a> are updated using data from this repo and <a href="https://ica.justice.gov.il/GenericCorporarionInfo/SearchCorporation?unit=8" target="_blank">רשם החברות.</a>

Please provide the current company number (ח.פ) whenever adding, updating or deleting your company. Only active, locally registered and non-violating companies are included in the final maps.

![Techmap](techmap.gif)

## Adding or updating your company

### Express Service 🚀

<a href="https://mrng.to/0UqeX19y8t" target="_blank">For a small donation,</a> I'll handle the process for you quickly and efficiently.

### Self Service

If you prefer, you can follow the technical instructions to submit the changes yourself at no cost.

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
     "ivcId": "A1000000230844",
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
     "breezyId": "acme",
     "comeetId": "acme/AF.100",
     "greenhouseId": "acme",
     "leverId": "acme",
     "isMultinational": false,
     "isActive": true
   }
   ```

- **name:** The name of the company appearing on the map (avoid adding Ltd, Limited, or Company at the end).
- **description:** The company's tagline or mission statement, preferably a one-liner with no superfluous adjectives and exaggerations.
- **categoryId:** Should be picked from [categories.json.](categories.json)
- **size:** Should be picked from [sizes.json.](sizes.json)
- **logoFile:** Should point to a 200x200 png, gif, jpg, or webp file uploaded to the [logos/](logos/) folder.
- **websiteUrl:** The company's homepage address.
- **careersUrl:** The company's careers/job page address.
- **linkedinId, crunchbaseId, ivcId, finderId, xId and facebookId:** The company IDs (not full URLs) from <a href="https://www.linkedin.com/" target="_blank">LinkedIn,</a> <a href="https://www.crunchbase.com/" target="_blank">Crunchbase,</a> <a href="https://www.ivc-online.com/" target="_blank">IVC,</a> <a href="https://finder.startupnationcentral.org/" target="_blank">Startup Finder</a>, <a href="https://x.com" target="_blank">X/Twitter</a> and <a href="https://www.facebook.com/" target="_blank">Facebook.</a>
- **linkedinNum:** The company numerical ID from <a href="https://www.linkedin.com/" target="_blank">LinkedIn.</a> This is NOT your Linkedin ID (can be found when viewing your company page source, looking for "fsd_company:"). Used to scrape your Linkedin jobs.
- **comeetId, breezyId, greenhouseId and/or leverId:** The company IDs (not full URLs) of your ATS platform. Used to scrape your ATS jobs.
- **addresses:** An array specifying one or more physical locations. Each object should contain at least city and preferably street and houseNumber. The map will do the geocoding automatically, or you can specify your own latitude and longitude.
- **isMultinational:** True/False if company is a multi-national company.
- **isActive:** True/False if company is active.

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

## License

This project is licensed under the <a href="https://opendatacommons.org/licenses/odbl/1-0/" target="_blank">Open Database License (ODbL) v1.0.</a> You are free to:

- **Share:** Copy and redistribute the material in any medium or format.
- **Adapt:** Remix, transform, and build upon the material for any purpose, even commercially.

However, you must attribute the original creator by crediting Michael Lugassy and providing a link to this project. If you modify or build upon the data, you must distribute your contributions under the same license as the original.

## Acknowledgements

Thank you to everyone who updates the map and helps with this project. I hope this tool proves useful for both job seekers and companies alike.

Happy job hunting! ❤️

Michael Lugassy

Follow me on <a href="https://www.linkedin.com/in/mluggy/" target="_blank">LinkedIn</a> & <a href="https://x.com/mluggy" target="_blank">X/Twitter.</a>
