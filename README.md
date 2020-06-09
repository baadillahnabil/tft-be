### Customers Backend

**Note: After you clone this project, you must clone this project `https://github.com/baadillahnabil/tft-fe**

**Follow the steps below:**

1. You can clone this project (use HTTPS) and run `git clone https://github.com/baadillahnabil/tft-be.git` on your terminal
2. Move to inside project folder `cd tft-be`
3. Install all dependencies, with run `yarn` on your terminal
4. Create schema on your local database SQL (you can use MySQLWorkbench) with name **thefthing**
5. Make sure your database setting inside **config.json and .env (you can copy the format from `.env.example`)** file is the same as your local database configuration (on "development")
6. Run `npx sequelize-cli db:migrate` on your terminal, this `sequelize-cli` used for create table to database thefthing
7. Run `yarn dev` on your terminal and then open [http://localhost:5000](http://localhost:5000) to view it in the browser.

Thank you :)
