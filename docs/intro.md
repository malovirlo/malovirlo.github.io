---
sidebar_position: 1
---

# Tutorial Intro

Let's discover my framework in less than 5 minutes.

## Getting Started

Get started by **creating a new site**.

Or **try my framework immediately with **[myframework](https://malovirlo.github.io)\*\*.

### Requierements

-   [PHP 8](https://www.php.net/downloads.php) version 8 or above:
    -   When installing PHP 8, check that it is correctly installed using the command:

```bash
php -v
```

-   [MySQL](https://dev.mysql.com/downloads/installer/) version 8 or above:
    -   When installing MySQL 8, check that it is correctly installed using the command:

```bash
MySQL --version
```

-   [apache2](https://httpd.apache.org/download.cgi) version 2.4.52 or above:
    -   When installing apache2 2.4.52, check that it is correctly installed using the command:

```bash
apache2 -v
```

## Generate a new site

Generate a new site using the **classic template** of my framework.

The classic template will automatically be added to your project after you run the command:

```bash
npm init my-framework-name@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run my framework.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The cd command changes the directory you're working with. In order to work with your newly created site using my framework, you'll need to navigate the terminal there.

The npm run start command builds your site locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open docs/intro.md (this page) and edit some lines: the site reloads automatically and displays your changes.
