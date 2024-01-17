# WebRTC rel no fek 100% work no root

# cara pake
1. Pastin undah clone 
````git clone https://github.com/yudono/webrtc````
2. ```cd webrtc```
3. ```npm install```
4. jalanin ```node app.js```
5. sebenernya udah bisa langsung di pake, tapi kalau mau beda device bagusnya pake ngrok soalnya kalo pake ip g jalan webcamnya udah nyoba gw
6. jangan lupa ubah yang ini
```const ws = new WebSocket("wss://662b-104-28-236-164.ngrok-free.app");```
di ubah ke lokasi kalian misal 127.0.0.1:3000 gitu 
7. testing aja nanti pasti bisa
