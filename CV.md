---
layout: default
title: "Curriculum Vitae"
description: "Detailed Personal Information"
password_protected: true  
custom_css: true
---

<div id="protected-content" style="display: none;"></div>

<div id="password-prompt">
  <h2>Protected CV</h2>
  <form id="cv-form" onsubmit="checkPassword(event)">
    <input type="password" id="cv-password" placeholder="Enter password">
    <button type="submit">Unlock</button>
  </form>
  <p id="error-message" style="color: red; display: none;">Incorrect password</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
const OBFUSCATED_CV = `6d7970405b786b4d587e5f5363475d6870606b426c4b6567701b6747676213496e60536c6f1b664060635b46624b655c705d6f496e181f7a447e7944621a794b6e181b68706070476f1a1f48661a5f6c70606b4d63605b4760535b485b5253797061674445686b7a6c536f4f605365634447797a5a624d4b45196f7d6f60417962536f62626d79696378781a6d6279435b525f6c636d63796253677d6b525373705d524167785b4b671b7961604b634266525b4c5850797b4478535c764b5319671879666d4b65614553674c5b60784663504d5f63476f1b606e7d4d66196f6b44521b1e6d1b6f6b4519677070506f4067785b4870635d7b446013416253636c635378406f7e4d4b665d7d67671b6f666e5d79586c625f19671a1b4e6e61536b44621a1f58607d616f5d655f6347531b65795246447f635c704b5f18605d6b7c457e41676078534b62785b72586b495f60797c1b6d786b7a637e7c474453534b62785b725863654b5a78614c66501b684578537f6f4b63446e526b7a605349616f4b537d6f521e425863654b451a4d734461656f63607d6d4519797b446d651a6d797940647f5b526c7e4d406c62631e7079495d4553794b67526b6558621b786c6b7d4866501f6f671a4d79625d795d6d796b7a6d5353616b605f4470536b7e5b63497b6e53635d456d5241607e6b4d63505f526f1b674f6c625b766d605b5260781f4066501b5d671b6f7d6f527d1f665d6b445a79497f631a674066501f6c447e79616b61651b66195365687953426c6c4d7b44435f6b671b657f6c4b536e6719657870621f786747796b5852534b62785c4668604d5c701a1f1a66635b7958536b62707f657e626d796c637853706247651a6e1853435a637847457e411866501f6b671a49496e53635d4e185240671b634d63501f5263195f7a6f7953666e5d65526078494c6c6e7966624b655c705d6f4b67785b48624b49706347531b6c625f6c5863595f707b794c6d786b7a6c6353616d185f4c635d7d4c5863496d6b7e5b696d636f5d5b781b4e6e61536b67185b635a786b4b4519797345781f706b7e79616b601f7d6f195f4866501b4d6f616b7d6f621b466c1953655a1d6544456d531f66535f6b5a624d4e58615b4b637e1b60707e6e466861511b604b537a63607c4668616b5d58604d606379631f4519797b446d651144635361587e415c45605f4760537d66447b657d6f78621a6d786b7a6b604d7d6f185f1866535b635a62537d6f52494866501b6c44606f666c586f4760536b7a6f7e7d7b6e4b635c677e1b63671b657f6c4b536e67196f6767187961626d537d45527d1f661b4962707e53446f18411c661a5b1760506767705d531b67785b605b6067446f184046627e5b436c1b657f60787c406c60481a6c1a537b6e6d5f736c626b656879494d6861535c62135f6f6862534d6d501344631a1f46671a5378587f655c45527c416778634d6d5d7d7060787d4866476b68706d65446078534b661a5b7e5850704360787d4c62796b7258506f616c4b134b6c626f195b53494d6861535c66477d7e4553496d6c605b5d701b7c7a5a1b53664447677d6f47631866506b4d626d5f70701a784f6e184919457f6f5d6f195f4c6c625f7a447e735d701b794b626d641f621b634f6362676762625b1a447e6f7f587e4150661953796c1b4942634b6367701b1b605b606f7b44185b535b18134b605349616b6d656c6f1b674d60635f4d707e5b444552491866536b7a58585b7d6f1a1f1866501f687078537f63195f4c66535b605b606f796c5d674767795b636b1a6b496e605b5f6362637e6379624167796563441b79405a1b49617060415c45537d7b67636f7b6619657045521e4067635b1e45185b7d6e1a794b60525a1f44506f4867636b656862537b677e535c6f47534e6661535d6b1a6b496e605b506261641f6e1849195b5070466d4b535f60787c40627e5a13696e1717`;
const OBFUSCATED_PASSWORD = "Q0ROS0hLcmpBS15GT0JFGhob";
const OBFUSCATED_XOR_KEY = "Kg=="; 

function getXorKey() {
  return atob(OBFUSCATED_XOR_KEY).charCodeAt(0);
}

function hexToStr(hex) {
  let str = '';
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return str;
}

function xorDecode(data, key) {
  let out = '';
  for (let i = 0; i < data.length; i++) {
    out += String.fromCharCode(data.charCodeAt(i) ^ key);
  }
  return out;
}

function rot13(str) {
  return str.replace(/[a-zA-Z]/g, function(c){
    return String.fromCharCode(
      (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
    );
  });
}

function decodePassword(obf, key) {
  let xorred = atob(obf);
  let out = '';
  for (let i = 0; i < xorred.length; i++) {
    out += String.fromCharCode(xorred.charCodeAt(i) ^ key);
  }
  return out;
}

function decodeCV(obf, key) {
  let xorred = hexToStr(obf);
  let rot = xorDecode(xorred, key);
  let b64_1 = rot13(rot);
  let b64_2 = atob(b64_1);
  let decoded = atob(b64_2);
  return decoded;
}

function checkPassword(event) {
  if(event) event.preventDefault();
  const input = document.getElementById('cv-password').value;
  const xorKey = getXorKey();
  const correct = decodePassword(OBFUSCATED_PASSWORD, xorKey);
  if(input === correct) {
    const decoded = decodeCV(OBFUSCATED_CV, xorKey);
    document.getElementById('protected-content').innerHTML = marked.parse(decoded);
    document.getElementById('protected-content').style.display = 'block';
    document.getElementById('password-prompt').style.display = 'none';
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
}
</script>