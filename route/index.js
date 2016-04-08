/*
 Copyright 2015 Loïc Ortola
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Node Misc
var express = require('express');

// Exports
module.exports = function (app, staticRoot, viewsRoot) {
//-------------------------------------------------------------------------------
// DASHBOARD
//-------------------------------------------------------------------------------
  // Static files
  app.use(express.static(staticRoot));
  
  app.route('/')
      .get(function (req, res) {
        res.sendFile(viewsRoot + '/register.html');
      });

  app.route('/dashboard')
      .get(function (req, res) {
        res.sendFile(viewsRoot + '/dashboard.html');
      });
};