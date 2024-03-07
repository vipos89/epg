module.exports = {
  apps : [{
    name   : "cron2",
    script : "npm run grab -- --channels=channels.xml --cron='* 2 * * *'",
    exec_mode : "fork",
    watch : false
  },
    {
      name   : "serve",
      script : "npm run serve",
      exec_mode : "fork",
      watch : false
    }
  ]
}
