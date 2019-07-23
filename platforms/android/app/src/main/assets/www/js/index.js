/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



var app = {
    // Application Constructor
    
            initialize: function(){
                document.getElementById('btn').addEventListener('click', app.takephoto);
            },
            onDeviceReady: function() {
                this.receivedEvent('deviceready');
            },
            takephoto: function() {
                let opts = {
                    quality:80,
                    destinationType: Camera.DestinationType.FILE_URI,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    encodingType: Camera.EncodingType.JPEG,
                    cameraDirection: Camera.Direction.BACK,
                    targetWidth: 500,
                    targetHeight:400,
        
                };
                navigator.camera.getPicture(app.onCameraSuccess, app.onFail, opts);
                navigator.geolocation.getCurrentPosition(app.onGeoSuccess, app.onFail, opts);
                
            },
            onCameraSuccess: function(imgURI) {
                document.getElementById('photo').src = "data:image/jpeg;base64,"+imgURI;
        
            },

            onGeoSuccess: function(position) {
                var date = new Date(position.timestamp);
                document.getElementById('msg').textContent = date + ", " + position.coords.latitude + ", " + position.coords.longitude;

            },
            onfail: function(msg) {
                document.getElementById('msg').textContent = msg;
            }

        };
        
    app.initialize();

