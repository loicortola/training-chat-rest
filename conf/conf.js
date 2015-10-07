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
/**
 * Configuration file
 */
module.exports = {
  "admin": {"login": "admin", "password": "password"},
  "maxAttachments": 4,
  "maxMessageSizeInKb": 1024,
  "maxMessagesInQueue": 1000,
  "maxMessagesResults": 3,
  "server": {"baseUrl": "http://localhost", "port": 9000}
};