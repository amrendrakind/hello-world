![](https://img.shields.io/badge/Microverse-blueviolet)

# Hello World Rails-React

## Description

> This project implements a connection between a Ruby on Rails back-end and React front-end

## Built With

- Ruby on Rails
- React
- Postgress


## Development set up

Clone Repository using

`git clone git@github.com:amrendrakind/hello-world-rails-react.git`

Or using HTTPS

`git clone https://github.com/amrendrakind/hello-world-rails-react.git`

Move into project directory

`cd hello-world-rails-react`

### Setup Database 
- Make sure that your Postgres database is installed.
- Open the file config\database.yml
- Modify the connection parameters to point your Postgres database:

    `username: [your_user]`

    `password: [your_password]`

- If required drop existing database : `rake db:drop`
- Create databases: `rake db:create`
- Create db structure including tables : `rake db:migrate`
- If required seed initial data (stored in db\seeds.rb file): `rails db:seed`


### Run API
- Located in the root path run `rails server` to start the API
- Visit http://localhost:3000/ in your browser!
- Navigate to http://localhost:3000/api/v1/greetings to see random Greeting in the API

### Run API

- Located in `react-app\` within root folder
- run npm i to install dependencies . run npm start to start the React App
- The app ask to select a different port:
    - Something is already running on port 3000
    - Would you like to run the app on another port instead? » (Y/n)
- Enter `Y` and the app open in the browser in next free port, for example:
- http://localhost:3001/

## Author

👤 **Amrendra K**

- GitHub: [@amrendrakind](https://github.com/amrendrakind)
- Twitter: [@amrendrak_](https://twitter.com/amrendrak_)
- LinkedIn: [amrendraakumar](https://linkedin.com/in/amrendraakumar)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/amrendrakind/budget-app/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Based on [Gregoire Vella on Behance design](https://www.behance.net/gregoirevella)
- Hat tip to anyone whose code was used
- Inspiration and support from peer group

## 📝 License

This project is [MIT](./LICENSE) licensed.