---
layout: project
title: "ARTSAT Internet Radio"
permalink: http://moxus.org/project/artsat-internet-radio
post_id: 891
categories:  []
---

generative net radio 2011


![](/images/project/asinrdojpg.jpg)

I put up the Internet radio streaming that named "ARTSAT Internet Radio" which uses data from sensors of the super-small satellite. It's using SuperCollider3 Server and generating sounds with data from the satellite and controls parameters.

 

listening point's URL:

[gs.idd.tamabi.ac.jp:8100/listen.m3u](http://gs.idd.tamabi.ac.jp:8100/listen.m3u)

 

At Nakasuka Laboratory in The University of Tokyo, the super-small satellite "PRISM" was launched in 2008 and now over our head."PRISM" has several kinds of sensors and sends telemetry data from height of 660km.

[http://www.space.t.u-tokyo.ac.jp/prism](http://www.space.t.u-tokyo.ac.jp/prism/)

 

There are four times data transmissions par a day with the satellite at Ground Station,and update data to the website.In the streaming server, scripts are running and  analyzing this website(this part is with Python) and write a XML file,Then SuperCollider reads this XML file intermittently and map parameters to Synths.

 

We proceed projects to try how we utilize the satellite for artistic purposes {its name is "ARTSAT Project") So it's not only for musical expressions but also for others. This Internet radio is a part of this projects.

 

In this radio streaming, I want to investigate new method of composition of "orbital music"..