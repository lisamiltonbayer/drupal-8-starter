# drupal-8-starter

01. Install Drupal 8 locally, remembering to get latest version

02. Install modules via CMS: 

	- Admin Toolbar

		-- Page url: https://www.drupal.org/project/admin_toolbar

		-- Module zip url: https://ftp.drupal.org/files/projects/admin_toolbar-8.x-1.26.tar.gz

	- Paragraphs

		-- Page url: https://www.drupal.org/project/paragraphs

		-- Module zip url: https://ftp.drupal.org/files/projects/paragraphs-8.x-1.8.tar.gz

03. Check module dependances are installed

04. Create theme folder: 'themes/theme_name'

05. Create 'info' file: eg. 'theme_name.info.yml'

06. Create 'css' folder: 'themes/theme_name/css'

07. Create 'templates' folder: 'themes/theme_name/templates'

	- Create 'layout' folder: 'themes/theme_name/templates/layout'

08. Create 'src' folder: 'themes/theme_name/src'

	- Create 'js' folder: 'themes/theme_name/src/js'

	- Create 'sass' folder: 'themes/theme_name/src/sass'

	- Create 'images' folder: 'themes/theme_name/src/images'

09. Copy 'html.html.twig' file from: 'core/themes/stable/templates/layout' into 'themes/theme_name/templates/layout'

10. Copy 'page.html.twig' file from: 'core/themes/stable/templates/layout' into 'themes/theme_name/templates/layout'

	- Review regions, and remove unwanted regions

		-- 'page.header'

		-- 'page.content'

		-- 'page.footer'

11. Enable theme in CMS

12. Disable any other themes

13. Disable unwanted blocks

14. Delete 'article' content type

15. Copy 'default.services.yml' file from: 'sites/default' into 'sites/default'

	- Rename to 'services.yml'

	- Under 'twig.config' change the following: 

		-- debug: true

		-- auto_reload: true

		-- cache: false

16. Define site front page: CMS -> Configuration -> System -> Basic Site Settings

17. Define input fields for pages using Paragraph module

18. Hide labels: CMS -> Page -> Manage Display tab

	- Change label visibility to hidden

19. Remove excess div containers from layout file: 'themes/theme_name/templates/field'

20. Create 'gulp' folder in root

	- Create 'gulpfile.js' file

	- Create 'package.json' file

21. Turn off file aggregation: CMS -> Configuration -> Development -> Performance

22. Create 'style.css' file: 'themes/theme_name/css/style.css'

23. Create 'site.js' file: 'themes/theme_name/js/site.js'

24. Check the website and make sure the files are pulling through

25. Copy 'site.js' file into: 'themes/theme_name/src/js'

26. Create 'sass' folder in: 'themes/theme_name/src'

27. Copy Bootstrap and other sass partials into: 'themes/theme_name/src'

28. Create 'field.html.twig' into: 'themes/theme_name/templates/field'

29. Create '*.twig' files for all neccessary paragraph types
