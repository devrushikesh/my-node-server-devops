module.exports = {
  apps: [
    {
      name: "app1",
      script: "./src/app.js",
      instances: 1,
      exec_mode: "fork",
    }
  ]
}
