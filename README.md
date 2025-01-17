![Logo](admin/oekofen-json.png)
# ioBroker.oekofen-json

[![NPM version](https://img.shields.io/npm/v/iobroker.oekofen-json.svg)](https://www.npmjs.com/package/iobroker.oekofen-json)
[![Downloads](https://img.shields.io/npm/dm/iobroker.oekofen-json.svg)](https://www.npmjs.com/package/iobroker.oekofen-json)
![Number of Installations](https://iobroker.live/badges/oekofen-json-installed.svg)
![Current version in stable repository](https://iobroker.live/badges/oekofen-json-stable.svg)
[![Dependency Status](https://img.shields.io/david/chaozmc/iobroker.oekofen-json.svg)](https://david-dm.org/chaozmc/iobroker.oekofen-json)

[![NPM](https://nodei.co/npm/iobroker.oekofen-json.png?downloads=true)](https://nodei.co/npm/iobroker.oekofen-json/)

**Tests:** ![Test and Release](https://github.com/chaozmc/ioBroker.oekofen-json/workflows/Test%20and%20Release/badge.svg)

## oekofen-json adapter for ioBroker

### Description

This adapter connects a OekoFEN heater with the new touch interface (also called [Pelletronic Touch](https://www.oekofen.com/en-gb/pelletronic-touch/)) to ioBroker. As OekoFEN implemented the JSON interface step by step and without public available documentation it should work at least with Version 3.10d and newer.
As there are many combinations of heaters, solarmodules, layer storages, sterling engines etc. out there, this adapters tries to read all available datapoints from the interface and creates the objects on the fly at startup. 

Read-Only datapoints are created as such as these starts mit L_ prefix in their name. Also converts the adapter the number's scaling according to the informations provided by the interface (factor attribute). For example, the heater deals with temperatures in the format XXX and factor 0.1, this will be converted by the adapter to XX.X on read operations and back to XXX on write operations.



### Installation

After installation, it's just required to enter 

* the IP, 
* TCP port, 
* the "so-called" password 
* and the interval 

at which the adapter tries to pull the updates. 

The adapter maintains the connected state, even there's no real permanent connection. If the device sends an error or the adapter isn't able to contact the OekoFEN controller it set's the connected state to false. For example this could happen if there are too many requests on the controller, which answers with HTTP 401 then. Under normal conditions the rate limit of the controller shouldn't be hit (2,5 seconds between requests). 

## Changelog
<!--
	Placeholder for the next version (at the beginning of the line):
	### **WORK IN PROGRESS** 
-->

### 0.2.2 (2022-08-15) 
* (chaozmc) changed objects-creation and value-updates to async/await

### 0.2.1 (2022-08-15) 
* (chaozmc) clear interval on triggered update - fixes #10
* (chaozmc) rewrite update & initialScan - fixes #11 and #12
* (chaozmc) store password encrypted - fixes #14
* (chaozmc) create static objects via io-package.json - fixes #13

### 0.2.0 (2022-07-24)
* (chaozmc) Update README, prepare for first stable release
* (chaozmc) Fix Objects with min/max null value (Issue #8)
* (chaozmc) Removed selectable encoding
* (chaozmc) Added v3.10d compatibility

### 0.2.0-beta.0 (2022-07-03)
* (chaozmc) update to admin v5 config and require min version of admin (>= 5.2.0)

### 0.1.0-beta.0 (2022-06-26)
* (chaozmc) selectable response encoding (utf8 & latin1) & bit of debug-logging added

### **0.0.3**
* (chaozmc) code cleanup, trigger for update & rescan

### **0.0.2**
* (chaozmc) first working release, fixed 0-value updates

### **0.0.1**
* (chaozmc) initial build phase, much try and error

## License
MIT License

Copyright (c) 2022 chaozmc <chaozmc@is-jo.org>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.