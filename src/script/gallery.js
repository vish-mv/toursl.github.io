document.getElementById('fontsize').addEventListener('change' , changeColorF );

    function changeFontSize(change){
	var texts = ["text1", "text2", "text3"];
	var i;
	for ( i=0; i<texts.length; i++){
		txt = document.getElementById(texts[i]);
		style = window.getComputedStyle(txt, null).getPropertyValue("fontsize");
		fontSize = parseFloat(style);
		changedFont = fontSize + change;
		txt.style.fontSize = (changedFont) + "px";
	}
}
document.getElementById('backgroundcolor').addEventListener('change' , changeColorB );
	
	
	<!--Back ground colour change -->
	function changeColorB() {
		var selectedColorB = document.getElementById('backgroundcolor').value ;
		
		if ( selectedColorB == 'grey') {
			document.body.style.backgroundColor = '#ededed' ;
		}
		else if ( selectedColorB == 'lBlue') {
			document.body.style.backgroundColor = '#ADD8E6' ;
		}
		else {
			document.body.style.backgroundColor = 'white' ;
		}
	} 

    function img1() {
		document.getElementById("mainImage").src = "images/image gallery/img1.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Sigiriya";	
		document.getElementById("desPara").innerHTML ="Sigiriya is an ancient rock fortress located in the Central Province of Sri Lanka. It was built in the 5th century AD by King Kasyapa and is considered one of the best-preserved examples of ancient urban planning. The site includes impressive rock carvings, landscaped gardens, and stunning frescoes, making it a popular tourist attraction. Visitors can climb to the top of the rock to see the remains of the king's palace and enjoy panoramic views of the surrounding area. Sigiriya is a must-visit destination for history buffs, nature lovers, and anyone interested in experiencing the unique cultural heritage of Sri Lanka.";
    }
    function img2() {
		document.getElementById("mainImage").src = "images/image gallery/img2.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Ritipanna Fishing";	
		document.getElementById("desPara").innerHTML ="Ritipanna Fishing is a popular fishing village located in the southwestern coastal region of Sri Lanka. It is known for its picturesque landscapes and a traditional fishing culture that has been practiced for centuries. Travelers can visit the village to experience the authentic lifestyle of the fishing community, take part in fishing activities, and taste fresh seafood. The village is also home to a beautiful beach, making it an ideal destination for sunbathing, swimming, and other water activities. Additionally, visitors can explore the nearby mangrove forests, visit the historic Buddhist temple, and enjoy the scenic boat rides. Ritipanna Fishing offers a unique and memorable experience for travelers looking to immerse themselves in the local culture and natural beauty of Sri Lanka.";
    }
    function img3() {
		document.getElementById("mainImage").src = "images/image gallery/img3.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Whale Watching";	
		document.getElementById("desPara").innerHTML ="Whale watching is a popular activity for travelers visiting Sri Lanka, especially during the peak season from December to April. The best places for whale watching in Sri Lanka are Mirissa, Trincomalee, and Kalpitiya, where visitors can spot different species of whales and dolphins in their natural habitat. The most commonly sighted whales are the blue whales, the largest animals on earth, and sperm whales, while the most frequently seen dolphins are the spinner, bottlenose, and spotted dolphins. During the tour, visitors can enjoy the stunning ocean views, learn about marine life from knowledgeable guides, and capture memorable photos of these magnificent creatures. It is important to choose a reputable tour operator with responsible and sustainable practices to ensure the safety and well-being of the marine animals. Whale watching in Sri Lanka is an unforgettable experience that offers a unique opportunity to appreciate the beauty and diversity of the ocean.";
    }
    function img4() {
		document.getElementById("mainImage").src = "images/image gallery/img4.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Ambuluwawa Tower";	
		document.getElementById("desPara").innerHTML ="Ambuluwawa Tower is a popular tourist attraction located in Gampola, a town in the central hills of Sri Lanka. It is a 48-meter-high tower built on top of a hill, offering panoramic views of the surrounding mountains, valleys, and forests. The tower is accessible by a series of steep staircases and features several observation decks at different heights, providing different views of the landscape. Visitors can also explore the landscaped gardens around the tower, which include a variety of flowering plants, fruit trees, and medicinal herbs. The tower is a popular spot for photography, picnics, and nature walks. It is also a spiritual site for locals, as it features a Buddhist temple, a mosque, and a Christian church, reflecting the religious diversity of Sri Lanka. Ambuluwawa Tower is a must-visit destination for travelers looking to enjoy breathtaking views and experience the cultural and natural diversity of Sri Lanka.";
    }
    function img5() {
		document.getElementById("mainImage").src = "images/image gallery/img5.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Galle Fort";	
		document.getElementById("desPara").innerHTML ="Galle Fort is a historic fortification located in the coastal town of Galle, in the southwestern part of Sri Lanka. It was built by the Portuguese in the 16th century and later expanded by the Dutch, making it a UNESCO World Heritage Site. The fort is surrounded by a wall and a moat and features a charming mix of colonial-era buildings, narrow streets, and quaint cafes and boutiques. Visitors can walk around the fort to explore the historic landmarks, including the Dutch Reformed Church, the Galle Lighthouse, and the National Maritime Museum. The fort is also home to a bustling fish market, where visitors can taste fresh seafood and watch the local fishermen at work. Galle Fort is a great destination for history enthusiasts, culture seekers, and anyone looking to soak up the charming ambiance of a bygone era.";    }
    function img6() {
		document.getElementById("mainImage").src = "images/image gallery/img6.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Yala National Park";	
		document.getElementById("desPara").innerHTML ="Yala National Park is one of the most popular national parks in Sri Lanka, located in the southeastern region of the island. It is home to a wide variety of wildlife, including elephants, leopards, sloth bears, crocodiles, and numerous species of birds. The park is divided into five blocks, with two of them open to visitors. Visitors can explore the park by jeep safari, which is the best way to spot the animals in their natural habitat. The park also features several natural attractions, including waterfalls, lakes, and scenic landscapes. The best time to visit Yala National Park is from February to July when the animals are more active and visible. Yala National Park is a must-visit destination for nature lovers and wildlife enthusiasts looking to experience the natural beauty and biodiversity of Sri Lanka.";    }
    function img7() {
		document.getElementById("mainImage").src = "images/image gallery/img7.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Coconut Tree Hills";	
		document.getElementById("desPara").innerHTML ="The Coconut Tree Hills is a popular tourist attraction located in Mirissa, a coastal town in the southern part of Sri Lanka. It is a scenic landscape consisting of several small hills covered in coconut trees, overlooking the Indian Ocean. The area offers stunning views of the coastline and is a popular spot for photography and sightseeing. Visitors can climb up the hills to enjoy the panoramic views, take photos, and relax in the shade of the coconut trees. The Coconut Tree Hills is also a great place to watch the sunrise or sunset over the ocean, adding to the serene atmosphere of the place. The area is easily accessible by foot or tuk-tuk and is a must-visit destination for travelers looking to experience the natural beauty and tranquility of Sri Lanka's coastline.";
     }
    function img8() {
		document.getElementById("mainImage").src = "images/image gallery/img8.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Ruwanwelisaya";	
		document.getElementById("desPara").innerHTML ="Ruwanwelisaya is a historic stupa located in the ancient city of Anuradhapura, in the northern part of Sri Lanka. It was built by King Dutugemunu in the 2nd century BCE and is considered one of the most sacred sites in Sri Lanka. The stupa is 92 meters high and features a beautiful hemispherical dome, adorned with intricate carvings and a golden spire at the top. Visitors can walk around the stupa, admire the intricate details, and learn about the history and significance of the site from knowledgeable guides. The area surrounding the stupa is also home to several other ancient ruins, including the Abhayagiri Vihara and the Jetavanaramaya, offering visitors a glimpse into the rich cultural heritage of Sri Lanka. The best time to visit Ruwanwelisaya is during the annual Esala Perahera festival, where the stupa is beautifully decorated with lights and thousands of pilgrims gather to offer their prayers. Ruwanwelisaya is a must-visit destination for travelers looking to experience the spirituality, history, and cultural richness of Sri Lanka.";    }
    function img9() {
		document.getElementById("mainImage").src = "images/image gallery/img9.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Blue Beach Island";	
		document.getElementById("desPara").innerHTML ="Blue Beach Island is a small, secluded island located off the coast of Nilwella, a town in the southern part of Sri Lanka. It is known for its pristine white sand beach, clear turquoise waters, and stunning coral reefs, making it a popular destination for snorkeling and diving. The island is only accessible by boat, adding to its exclusive and remote atmosphere. Visitors can relax on the beach, soak up the sun, and swim in the crystal-clear waters. The island also offers opportunities for exploring the coral reefs and observing a variety of marine life, including tropical fish, sea turtles, and colorful corals. The best time to visit Blue Beach Island is during the dry season from December to April, when the weather is sunny and the seas are calm. Blue Beach Island is a must-visit destination for travelers looking to escape the crowds and enjoy the beauty and serenity of a secluded tropical paradise.";    }
    function img10() {
		document.getElementById("mainImage").src = "images/image gallery/img10.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Aberdeen Waterfall";	
		document.getElementById("desPara").innerHTML ="Aberdeen Waterfall is a picturesque waterfall located in the hill country of Sri Lanka, near the town of Ginigathhena. It is a popular destination for nature lovers and adventure seekers, offering a stunning natural setting surrounded by lush greenery and rolling hills. Visitors can hike through the forest to reach the waterfall, which cascades down a rocky cliff into a crystal-clear pool below. The area around the waterfall is also home to several other natural attractions, including tea plantations, scenic viewpoints, and trekking trails. Visitors can take a refreshing dip in the cool waters of the pool, take photos, or simply relax and enjoy the serene atmosphere of the waterfall. The best time to visit Aberdeen Waterfall is during the rainy season from May to August when the waterfall is at its fullest and most impressive. Aberdeen Waterfall is a must-visit destination for travelers looking to experience the natural beauty and tranquility of Sri Lanka's hill country.";
        }
    function img11() {
		document.getElementById("mainImage").src = "images/image gallery/img11.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Adam's Peak";	
		document.getElementById("desPara").innerHTML ="Adam's Peak, also known as Sri Pada, is a mountain located in the central highlands of Sri Lanka. It is a sacred site for Buddhists, Hindus, and Muslims, who believe that the mountain is home to the footprint of the Buddha, Shiva, or Adam, depending on the faith. The mountain is known for its distinctive shape and is a popular pilgrimage site, with thousands of visitors climbing to the top to pay their respects and witness the stunning panoramic views. The climb to the top of Adam's Peak involves climbing more than 5,000 steps, which can take between 2-4 hours, depending on fitness level. Visitors usually start their climb at night, in order to reach the summit in time to witness the beautiful sunrise. The peak is also a popular destination for trekking enthusiasts, who can explore the surrounding forests and waterfalls. The best time to visit Adam's Peak is during the pilgrimage season from December to May when the weather is cooler and the crowds are smaller. Adam's Peak is a must-visit destination for travelers looking to experience the spirituality, natural beauty, and cultural significance of Sri Lanka.";    
    }
    function img12() {
		document.getElementById("mainImage").src = "images/image gallery/img12.webp";
		document.getElementById("desQuote").innerHTML = "";
		document.getElementById("desTopic").innerHTML = "Idalgashinna";	
		document.getElementById("desPara").innerHTML ="Idalgashinna is a small village located in the heart of Sri Lanka's hill country, known for its picturesque tea plantations and scenic beauty. The village is surrounded by rolling hills covered in lush green tea bushes, making it a popular destination for nature lovers and photographers. Visitors can take a tour of the tea plantations, learn about the process of tea production, and sample some of the best teas in the world. The area around Idalgashinna is also home to several hiking trails, which offer stunning views of the surrounding countryside and the chance to spot wildlife such as monkeys and birds. Visitors can also explore the nearby Dambatenne Tea Factory, which was established in 1890 and is one of the oldest tea factories in Sri Lanka. The factory offers guided tours and visitors can learn about the history of tea production in Sri Lanka. The best time to visit Idalgashinna is during the dry season from December to April, when the weather is sunny and the skies are clear. Idalgashinna is a must-visit destination for travelers looking to experience the natural beauty, culture, and history of Sri Lanka's hill country.";
    }