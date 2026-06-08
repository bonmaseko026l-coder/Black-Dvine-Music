# Black-Dvine-Music

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Black Dvine Music</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:#050505;
    color:white;
}

/* NAVBAR */

nav{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 10%;
    background:#0f0f0f;
    position:sticky;
    top:0;
}

.logo{
    font-size:30px;
    font-weight:bold;
    color:#9d4edd;
}

nav ul{
    display:flex;
    list-style:none;
}

nav ul li{
    margin-left:25px;
}

nav ul li a{
    color:white;
    text-decoration:none;
    transition:0.3s;
}

nav ul li a:hover{
    color:#00e5ff;
}

/* HERO */

.hero{
    height:90vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),
    url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200') center/cover;
}

.hero-content h1{
    font-size:70px;
    color:#9d4edd;
}

.hero-content p{
    margin-top:20px;
    font-size:22px;
}

.btn{
    display:inline-block;
    margin-top:30px;
    padding:15px 35px;
    background:#00e5ff;
    color:black;
    border-radius:30px;
    text-decoration:none;
    font-weight:bold;
    transition:0.3s;
}

.btn:hover{
    transform:scale(1.1);
}

/* ABOUT */

.about{
    padding:80px 10%;
    text-align:center;
}

.about h2{
    color:#9d4edd;
    margin-bottom:20px;
    font-size:40px;
}

/* MUSIC */

.music{
    padding:80px 10%;
    background:#0d0d0d;
}

.music h2{
    text-align:center;
    color:#00e5ff;
    margin-bottom:40px;
    font-size:40px;
}

.music-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:#161616;
    padding:20px;
    border-radius:20px;
    transition:0.3s;
}

.card:hover{
    transform:translateY(-10px);
}

.card img{
    width:100%;
    border-radius:15px;
}

.card h3{
    margin:15px 0;
}

audio{
    width:100