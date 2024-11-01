import express from 'express';
import path from 'node:path';
import { exec } from 'child_process';
import webpack  from 'webpack';
import middlewarew from 'webpack-dev-middleware';

import config from "../webpack.config.dev.js";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(middlewarew(compiler, {
  stats: 'minimal',  // Possible values: 'none', 'errors-only', 'minimal', 'normal', 'detailed'
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(import.meta.dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  err? console.log(err) : exec(`start ${'http://localhost:' + port}`);
})