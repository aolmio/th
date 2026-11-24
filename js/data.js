"use strict";
const RAW_VOCAB = `สวัสดี|sa2-wat2-dii1|int|hello; goodbye|1|greet|สวัสดีครับ ยินดีที่ได้รู้จัก|hello, nice to meet you
ขอบคุณ|kɔɔp2-kun1|v|thank; thank you|1|greet|ขอบคุณมากครับ|thank you very much
ขอโทษ|kɔɔ5-toot3|v|sorry; excuse me|1|greet|ขอโทษค่ะ ฉันมาสาย|sorry, I am late
ลาก่อน|laa1-gɔɔn2|int|goodbye|1|greet|ลาก่อนค่ะ แล้วพบกันใหม่|goodbye, see you again
ขอบใจ|kɔɔp2-jai1|v|thanks (informal)|1|greet|ขอบใจมากนะ|thanks a lot
โชคดี|chook3-dii1|int|good luck|1|greet|โชคดีนะครับ|good luck
สบายดี|sa2-baai1-dii1|adj|well; fine|1|greet|ฉันสบายดีค่ะ|I am fine
ยินดี|yin1-dii1|adj|glad; pleased|1|greet|ยินดีที่ได้รู้จักครับ|pleased to meet you
เชิญ|chɤɤn1|v|please; invite|1|greet|เชิญนั่งครับ|please sit down
ขอ|kɔɔ5|v|ask for; request|1|greet|ขอน้ำเย็นหน่อยครับ|may I have some cold water
ชื่อ|chɯɯ3|n|name|1|basic|ฉันชื่อมานีค่ะ|my name is Manee
ใช่|chai3|adv|yes; correct|1|basic|ใช่ค่ะ|yes
ของ|kɔɔng5|n|thing; belongings|1|basic|ของในกระเป๋าเป็นของฉัน|the things in the bag are mine
คำ|kam1|n|word|1|basic|คำนี้ยากมาก|this word is very hard
ภาษา|paa1-saa5|n|language|1|basic|ภาษาไทยไม่ยากครับ|Thai is not hard
เรื่อง|rɯang3|n|story; matter|1|basic|ฉันชอบเรื่องนี้|I like this story
ข่าว|kaao2|n|news|1|basic|ผมดูข่าวทุกเช้า|I watch the news every morning
เสียง|siang5|n|sound; voice|1|basic|เสียงเพลงดังมาก|the sound of the music is very loud
ปัญหา|bpan1-haa5|n|problem|1|basic|ไม่มีปัญหาครับ|no problem
รูป|ruup3|n|picture; photo|1|basic|รูปนี้สวยมาก|this picture is very beautiful
คน|kon1|n|person; people|1|people|ที่นี่มีคนมาก|there are many people here
ผู้ชาย|puu3-chaai1|n|man|1|people|ผู้ชายคนนั้นเป็นครู|that man is a teacher
ผู้หญิง|puu3-ying5|n|woman|1|people|ผู้หญิงคนนั้นเป็นหมอ|that woman is a doctor
เด็ก|dek2|n|child|1|people|เด็กกำลังเล่นอยู่|the child is playing
ผู้ใหญ่|puu3-yai2|n|adult|1|people|ผู้ใหญ่ต้องไปทำงาน|adults must go to work
เพื่อน|pɯan3|n|friend|1|people|เพื่อนของฉันมาจากไทย|my friend comes from Thailand
หมอ|mɔɔ5|n|doctor|1|people|หมอทำงานที่โรงพยาบาล|the doctor works at the hospital
ตำรวจ|dtam1-ruat3|n|police officer|1|people|ตำรวจอยู่หน้าธนาคาร|the police officer is in front of the bank
พยาบาล|pa4-yaa1-baan1|n|nurse|1|people|พยาบาลใจดีมาก|the nurse is very kind
พ่อ|pɔɔ3|n|father|1|family|พ่อของฉันเป็นครู|my father is a teacher
แม่|mɛɛ3|n|mother|1|family|แม่ทำอาหารอร่อยมาก|mother cooks very delicious food
ลูก|luuk3|n|child; offspring|1|family|ฉันมีลูกสองคน|I have two children
พี่|pii3|n|older sibling|1|family|พี่ของฉันอยู่กรุงเทพ|my older sibling lives in Bangkok
น้อง|nɔɔng4|n|younger sibling|1|family|น้องชอบเล่นกีฬา|my younger sibling likes sports
ปู่|bpuu2|n|paternal grandfather|1|family|ปู่ชอบปลูกต้นไม้|grandfather likes to plant trees
ย่า|yaa3|n|paternal grandmother|1|family|ย่าอยู่ที่บ้าน|grandmother is at home
ยาย|yaai1|n|maternal grandmother|1|family|ยายทำขนมอร่อย|grandmother makes tasty sweets
ลุง|lung1|n|uncle (older than parent)|1|family|ลุงขับรถไปตลาด|uncle drives to the market
ป้า|bpaa3|n|aunt (older than parent)|1|family|ป้าขายผลไม้ที่ตลาด|aunt sells fruit at the market
ครอบครัว|krɔɔp3-krua1|n|family|1|family|ครอบครัวของฉันมีห้าคน|my family has five people
สามี|saa5-mii1|n|husband|1|family|สามีของเธอเป็นครู|her husband is a teacher
ภรรยา|pan1-ra2-yaa1|n|wife|1|family|ภรรยาของเขาทำอาหารเก่ง|his wife cooks well
แฟน|fɛɛn1|n|boyfriend; girlfriend|1|family|ผมมีแฟนแล้วครับ|I already have a girlfriend
หัว|hua5|n|head|1|body|ฉันปวดหัว|I have a headache
หน้า|naa3|n|face|1|body|เขาล้างหน้าทุกเช้า|he washes his face every morning
ตา|dtaa1|n|eye|1|body|ตาของเธอสวยมาก|her eyes are very beautiful
หู|huu5|n|ear|1|body|หูของฉันเจ็บ|my ear hurts
จมูก|ja2-muuk2|n|nose|1|body|แมวมีจมูกเล็ก|the cat has a small nose
ปาก|bpaak2|n|mouth|1|body|เปิดปากหน่อยครับ|please open your mouth
ฟัน|fan1|n|tooth; teeth|1|body|ฉันแปรงฟันทุกเช้า|I brush my teeth every morning
มือ|mɯɯ1|n|hand|1|body|ล้างมือก่อนกินข้าว|wash your hands before eating
เท้า|taao4|n|foot|1|body|เท้าของฉันเจ็บ|my foot hurts
ขา|kaa5|n|leg|1|body|ขาของเขายาวมาก|his legs are very long
แขน|kɛɛn5|n|arm|1|body|แขนของฉันเจ็บ|my arm hurts
ท้อง|tɔɔng4|n|stomach; belly|1|body|ฉันปวดท้อง|I have a stomachache
หลัง|lang5|n|back|1|body|ฉันปวดหลัง|I have a backache
หัวใจ|hua5-jai1|n|heart|1|body|หัวใจของฉันเต้นเร็ว|my heart beats fast
ข้าว|kaao3|n|rice; meal|1|food|ฉันกินข้าวกับปลา|I eat rice with fish
อาหาร|aa1-haan5|n|food|1|food|อาหารไทยอร่อยมาก|Thai food is very delicious
ไข่|kai2|n|egg|1|food|ฉันกินไข่ทุกเช้า|I eat eggs every morning
เนื้อ|nɯa4|n|meat; beef|1|food|เขาไม่กินเนื้อ|he does not eat meat
หมู|muu5|n|pork; pig|1|food|ฉันชอบหมูย่าง|I like grilled pork
ไก่|gai2|n|chicken|1|food|ไก่ทอดอร่อยมาก|fried chicken is very delicious
ปลา|bplaa1|n|fish|1|food|แม่ซื้อปลาที่ตลาด|mother buys fish at the market
กุ้ง|gung3|n|shrimp|1|food|ฉันชอบกินกุ้ง|I like eating shrimp
เกลือ|glɯa1|n|salt|1|food|ขอเกลือหน่อยครับ|may I have some salt
น้ำตาล|nam4-dtaan1|n|sugar|1|food|กาแฟไม่ใส่น้ำตาล|coffee without sugar
ขนม|ka2-nom5|n|sweets; snack|1|food|เด็กชอบกินขนม|children like eating sweets
ขนมปัง|ka2-nom5-bpang1|n|bread|1|food|ฉันกินขนมปังตอนเช้า|I eat bread in the morning
ก๋วยเตี๋ยว|guai5-dtiao5|n|noodles; noodle soup|1|food|ฉันอยากกินก๋วยเตี๋ยว|I want to eat noodles
น้ำ|naam4|n|water|1|drink|ขอน้ำหน่อยครับ|may I have some water
ชา|chaa1|n|tea|1|drink|ผมชอบดื่มชาร้อน|I like drinking hot tea
กาแฟ|gaa1-fɛɛ1|n|coffee|1|drink|พ่อดื่มกาแฟทุกเช้า|father drinks coffee every morning
นม|nom1|n|milk|1|drink|เด็กดื่มนมทุกวัน|the child drinks milk every day
เบียร์|bia1|n|beer|1|drink|เขาไม่ดื่มเบียร์|he does not drink beer
น้ำแข็ง|nam4-kɛng5|n|ice|1|drink|ขอน้ำแข็งเพิ่มค่ะ|more ice, please
น้ำส้ม|nam4-som3|n|orange juice|1|drink|ฉันดื่มน้ำส้มตอนเช้า|I drink orange juice in the morning
ผลไม้|pon5-la4-mai4|n|fruit|1|fruitveg|ฉันชอบกินผลไม้|I like eating fruit
ผัก|pak2|n|vegetable|1|fruitveg|ผักที่ตลาดสดมาก|the vegetables at the market are fresh
กล้วย|gluai3|n|banana|1|fruitveg|ลิงชอบกินกล้วย|monkeys like eating bananas
ส้ม|som3|n|orange|1|fruitveg|ส้มลูกนี้หวานมาก|this orange is very sweet
มะม่วง|ma4-muang3|n|mango|1|fruitveg|ฉันชอบมะม่วงสุก|I like ripe mango
แตงโม|dtɛɛng1-moo1|n|watermelon|1|fruitveg|แตงโมเย็นอร่อยมาก|cold watermelon is very delicious
สับปะรด|sap2-bpa2-rot4|n|pineapple|1|fruitveg|แม่ซื้อสับปะรดมาหนึ่งลูก|mother bought a pineapple
มะนาว|ma4-naao1|n|lime|1|fruitveg|ใส่มะนาวในน้ำ|put lime in the water
มะเขือเทศ|ma4-kɯa5-teet3|n|tomato|1|fruitveg|ฉันซื้อมะเขือเทศสามลูก|I bought three tomatoes
หัวหอม|hua5-hɔɔm5|n|onion|1|fruitveg|หัวหอมทำให้น้ำตาไหล|onions make tears flow
กระเทียม|gra2-tiam1|n|garlic|1|fruitveg|อาหารนี้ใส่กระเทียม|this dish has garlic
ข้าวโพด|kaao3-poot3|n|corn|1|fruitveg|เด็กชอบกินข้าวโพดต้ม|children like boiled corn
ถั่ว|tua2|n|bean; nut|1|fruitveg|ฉันแพ้ถั่ว|I am allergic to nuts
สัตว์|sat2|n|animal|1|animals|สัตว์ในสวนสัตว์น่ารักมาก|the animals in the zoo are very cute
หมา|maa5|n|dog|1|animals|หมาของฉันตัวใหญ่|my dog is big
แมว|mɛɛo1|n|cat|1|animals|แมวนอนอยู่บนเตียง|the cat is sleeping on the bed
นก|nok4|n|bird|1|animals|นกกำลังร้องเพลง|the bird is singing
ช้าง|chaang4|n|elephant|1|animals|ช้างตัวใหญ่มาก|the elephant is very big
ม้า|maa4|n|horse|1|animals|ม้าวิ่งเร็ว|the horse runs fast
วัว|wua1|n|cow; ox|1|animals|วัวกินหญ้า|the cow eats grass
ลิง|ling1|n|monkey|1|animals|ลิงชอบกินกล้วย|monkeys like eating bananas
หนู|nuu5|n|mouse; rat|1|animals|หนูอยู่ในครัว|the mouse is in the kitchen
เสือ|sɯa5|n|tiger|1|animals|เสือตัวนี้ใหญ่มาก|this tiger is very big
งู|nguu1|n|snake|1|animals|ฉันกลัวงู|I am afraid of snakes
เป็ด|bpet2|n|duck|1|animals|เป็ดว่ายน้ำอยู่|the duck is swimming
ปู|bpuu1|n|crab|1|animals|ฉันชอบกินปู|I like eating crab
ยุง|yung1|n|mosquito|1|animals|ที่นี่มียุงเยอะ|there are many mosquitoes here
สี|sii5|n|color|1|colors|คุณชอบสีอะไร|what color do you like
แดง|dɛɛng1|adj|red|1|colors|รถคันนี้สีแดง|this car is red
เขียว|kiao5|adj|green|1|colors|ใบไม้สีเขียว|leaves are green
เหลือง|lɯang5|adj|yellow|1|colors|กล้วยสีเหลือง|bananas are yellow
ฟ้า|faa4|adj|light blue; sky|1|colors|ท้องฟ้าสีฟ้า|the sky is light blue
น้ำเงิน|nam4-ngɤɤn1|adj|dark blue|1|colors|ฉันชอบเสื้อสีน้ำเงิน|I like the dark blue shirt
ขาว|kaao5|adj|white|1|colors|ข้าวสีขาว|rice is white
ดำ|dam1|adj|black|1|colors|แมวตัวนี้สีดำ|this cat is black
ม่วง|muang3|adj|purple|1|colors|ดอกไม้สีม่วงสวยมาก|the purple flowers are very beautiful
ชมพู|chom1-puu1|adj|pink|1|colors|เธอชอบสีชมพู|she likes pink
เสื้อผ้า|sɯa3-paa3|n|clothes|1|clothes|ฉันซื้อเสื้อผ้าที่ตลาด|I buy clothes at the market
เสื้อ|sɯa3|n|shirt; top|1|clothes|เสื้อตัวนี้สวยมาก|this shirt is very beautiful
กางเกง|gaang1-geeng1|n|trousers; pants|1|clothes|กางเกงตัวนี้ยาวเกินไป|these trousers are too long
กระโปรง|gra2-bproong1|n|skirt|1|clothes|เธอใส่กระโปรงสีแดง|she wears a red skirt
รองเท้า|rɔɔng1-taao4|n|shoes|1|clothes|รองเท้าคู่นี้ใหม่|these shoes are new
หมวก|muak2|n|hat; cap|1|clothes|ผมใส่หมวกเวลาออกแดด|I wear a hat when out in the sun
แว่นตา|wɛɛn3-dtaa1|n|glasses|1|clothes|คุณปู่ใส่แว่นตา|grandfather wears glasses
กระเป๋า|gra2-bpao5|n|bag|1|clothes|กระเป๋าใบนี้หนักมาก|this bag is very heavy
นาฬิกา|naa1-li4-gaa1|n|watch; clock|1|clothes|นาฬิกาเรือนนี้แพงมาก|this watch is very expensive
แหวน|wɛɛn5|n|ring|1|clothes|เธอมีแหวนทอง|she has a gold ring
บ้าน|baan3|n|house; home|1|home|บ้านของฉันอยู่ใกล้ตลาด|my house is near the market
ห้อง|hɔɔng3|n|room|1|home|ห้องนี้สะอาดมาก|this room is very clean
ประตู|bpra2-dtuu1|n|door|1|home|กรุณาปิดประตู|please close the door
หน้าต่าง|naa3-dtaang2|n|window|1|home|เปิดหน้าต่างหน่อยครับ|please open the window
โต๊ะ|dto4|n|table; desk|1|home|หนังสืออยู่บนโต๊ะ|the book is on the table
เก้าอี้|gao3-ii3|n|chair|1|home|เก้าอี้ตัวนี้ใหม่|this chair is new
เตียง|dtiang1|n|bed|1|home|ฉันนอนบนเตียง|I sleep on the bed
ห้องน้ำ|hɔɔng3-naam4|n|bathroom; toilet|1|home|ห้องน้ำอยู่ที่ไหนครับ|where is the bathroom
ครัว|krua1|n|kitchen|1|home|แม่อยู่ในครัว|mother is in the kitchen
กุญแจ|gun1-jɛɛ1|n|key|1|home|ผมหากุญแจไม่เจอ|I cannot find my key
จาน|jaan1|n|plate; dish|1|home|ล้างจานหลังกินข้าว|wash the dishes after eating
ช้อน|chɔɔn4|n|spoon|1|home|ขอช้อนหนึ่งคันครับ|may I have a spoon
แก้ว|gɛɛo3|n|glass; cup|1|home|ฉันดื่มน้ำสองแก้ว|I drank two glasses of water
มีด|miit3|n|knife|1|home|มีดเล่มนี้คมมาก|this knife is very sharp
เมือง|mɯang1|n|city; town|1|city|กรุงเทพเป็นเมืองใหญ่|Bangkok is a big city
ถนน|ta2-non5|n|road; street|1|city|ถนนสายนี้ยาวมาก|this road is very long
ตลาด|dta2-laat2|n|market|1|city|ฉันไปตลาดทุกเช้า|I go to the market every morning
ธนาคาร|ta4-naa1-kaan1|n|bank|1|city|ธนาคารอยู่ข้างโรงแรม|the bank is next to the hotel
โรงพยาบาล|roong1-pa4-yaa1-baan1|n|hospital|1|city|หมอทำงานที่โรงพยาบาล|the doctor works at the hospital
โรงแรม|roong1-rɛɛm1|n|hotel|1|city|โรงแรมนี้สะอาดมาก|this hotel is very clean
วัด|wat4|n|temple|1|city|วัดนี้สวยมาก|this temple is very beautiful
ห้าง|haang3|n|shopping mall|1|city|เราไปเดินที่ห้างวันนี้|we go walking at the mall today
ซอย|sɔɔi1|n|alley; side street|1|city|บ้านฉันอยู่ในซอยนี้|my house is in this alley
สะพาน|sa2-paan1|n|bridge|1|city|สะพานนี้ยาวมาก|this bridge is very long
สถานี|sa2-taa5-nii1|n|station|1|city|สถานีรถไฟอยู่ใกล้ที่นี่|the train station is near here
ไปรษณีย์|bprai1-sa2-nii1|n|post office; mail|1|city|ไปรษณีย์ปิดแล้ว|the post office is already closed
รถ|rot4|n|car; vehicle|1|transport|รถคันนี้สีแดง|this car is red
รถไฟ|rot4-fai1|n|train|1|transport|ฉันไปเชียงใหม่ด้วยรถไฟ|I go to Chiang Mai by train
รถเมล์|rot4-mee1|n|bus|1|transport|ผมไปทำงานโดยรถเมล์|I go to work by bus
รถแท็กซี่|rot4-tɛk4-sii3|n|taxi|1|transport|เรียกรถแท็กซี่ให้หน่อยครับ|please call a taxi for me
จักรยาน|jak2-gra2-yaan1|n|bicycle|1|transport|เด็กขี่จักรยานไปโรงเรียน|the child rides a bicycle to school
เครื่องบิน|krɯang3-bin1|n|airplane|1|transport|เครื่องบินมาถึงแล้ว|the airplane has arrived
เรือ|rɯa1|n|boat; ship|1|transport|เราไปเกาะด้วยเรือ|we go to the island by boat
ตั๋ว|dtua5|n|ticket|1|transport|ฉันซื้อตั๋วรถไฟสองใบ|I bought two train tickets
สนามบิน|sa2-naam5-bin1|n|airport|1|transport|สนามบินอยู่ไกลจากเมือง|the airport is far from the city
ทาง|taang1|n|way; path|1|transport|ทางนี้ไปตลาด|this way goes to the market
โรงเรียน|roong1-rian1|n|school|1|school|ลูกของฉันไปโรงเรียนทุกวัน|my child goes to school every day
ครู|kruu1|n|teacher|1|school|ครูของฉันใจดีมาก|my teacher is very kind
นักเรียน|nak4-rian1|n|student; pupil|1|school|นักเรียนอ่านหนังสือในห้องสมุด|the students read books in the library
หนังสือ|nang5-sɯɯ5|n|book|1|school|ฉันอ่านหนังสือทุกวัน|I read books every day
ปากกา|bpaak2-gaa1|n|pen|1|school|ผมไม่มีปากกา|I do not have a pen
ดินสอ|din1-sɔɔ5|n|pencil|1|school|ฉันเขียนด้วยดินสอ|I write with a pencil
สมุด|sa2-mut2|n|notebook|1|school|สมุดเล่มนี้ใหม่|this notebook is new
กระดาษ|gra2-daat2|n|paper|1|school|ขอกระดาษหนึ่งแผ่นครับ|may I have a sheet of paper
ห้องเรียน|hɔɔng3-rian1|n|classroom|1|school|ห้องเรียนสะอาดมาก|the classroom is very clean
การบ้าน|gaan1-baan3|n|homework|1|school|วันนี้การบ้านเยอะมาก|there is a lot of homework today
คำถาม|kam1-taam5|n|question|1|school|ครูตอบคำถามของเด็ก|the teacher answers the child's question
สอบ|sɔɔp2|v|take an exam; exam|1|school|พรุ่งนี้ฉันต้องสอบ|tomorrow I have to take an exam
งาน|ngaan1|n|work; job; event|1|work|งานของฉันสนุกมาก|my work is a lot of fun
ทำงาน|tam1-ngaan1|v|work|1|work|พ่อทำงานที่ธนาคาร|father works at the bank
บริษัท|bɔɔ1-ri4-sat2|n|company|1|work|บริษัทอยู่ใกล้สถานี|the company is near the station
สำนักงาน|sam5-nak4-ngaan1|n|office|1|work|สำนักงานเปิดเก้าโมง|the office opens at nine
เจ้านาย|jao3-naai1|n|boss|1|work|เจ้านายของฉันใจดี|my boss is kind
เงินเดือน|ngɤɤn1-dɯan1|n|salary|1|work|เงินเดือนของเขาสูง|his salary is high
โรงงาน|roong1-ngaan1|n|factory|1|work|โรงงานอยู่นอกเมือง|the factory is outside the city
พนักงาน|pa4-nak4-ngaan1|n|staff; employee|1|work|พนักงานที่นี่ใจดีมาก|the staff here are very kind
ช่าง|chaang3|n|technician; craftsman|1|work|ช่างมาซ่อมประตู|the technician comes to fix the door
เงิน|ngɤɤn1|n|money; silver|1|money|ฉันไม่มีเงิน|I do not have money
เหรียญ|rian5|n|coin|1|money|ฉันมีเหรียญสามเหรียญ|I have three coins
ราคา|raa1-kaa1|n|price|1|money|ราคาเท่าไรครับ|what is the price
ค่า|kaa3|n|fee; cost|1|money|ค่ารถเท่าไรครับ|how much is the fare
บัญชี|ban1-chii1|n|account|1|money|ผมมีบัญชีที่ธนาคาร|I have an account at the bank
บัตร|bat2|n|card|1|money|คุณมีบัตรไหมครับ|do you have a card
ใบเสร็จ|bai1-set2|n|receipt|1|money|ขอใบเสร็จด้วยครับ|may I have a receipt too
จ่าย|jaai2|v|pay|1|money|ฉันจ่ายเงินสด|I pay in cash
ทอน|tɔɔn1|v|give change|1|money|ร้านทอนเงินให้ฉัน|the shop gives me change
ร้าน|raan4|n|shop; restaurant|1|shop|ร้านนี้เปิดทุกวัน|this shop opens every day
ซื้อ|sɯɯ4|v|buy|1|shop|ฉันอยากซื้อเสื้อตัวนี้|I want to buy this shirt
ขาย|kaai5|v|sell|1|shop|ป้าขายผลไม้ที่ตลาด|aunt sells fruit at the market
ลูกค้า|luuk3-kaa4|n|customer|1|shop|ลูกค้าเยอะมากวันนี้|there are many customers today
ถุง|tung5|n|bag (plastic)|1|shop|ขอถุงหนึ่งใบครับ|may I have a bag
ของขวัญ|kɔɔng5-kwan5|n|gift|1|shop|ฉันซื้อของขวัญให้แม่|I bought a gift for mother
สินค้า|sin5-kaa4|n|goods; product|1|shop|สินค้าในร้านนี้ถูกมาก|the goods in this shop are very cheap
เลือก|lɯak3|v|choose|1|shop|คุณเลือกสีอะไร|which color do you choose
ลอง|lɔɔng1|v|try|1|shop|ลองชิมอาหารนี้ดูครับ|please try this food
ต้นไม้|dton3-mai4|n|tree; plant|1|nature|ต้นไม้ในสวนสูงมาก|the trees in the garden are very tall
ดอกไม้|dɔɔk2-mai4|n|flower|1|nature|ดอกไม้นี้สวยมาก|this flower is very beautiful
ใบไม้|bai1-mai4|n|leaf|1|nature|ใบไม้สีเขียว|leaves are green
ภูเขา|puu1-kao5|n|mountain|1|nature|ภูเขาลูกนี้สูงมาก|this mountain is very high
ทะเล|ta4-lee1|n|sea|1|nature|เราไปเที่ยวทะเลกัน|let's go to the sea
แม่น้ำ|mɛɛ3-naam4|n|river|1|nature|แม่น้ำนี้ยาวมาก|this river is very long
ป่า|bpaa2|n|forest|1|nature|สัตว์อยู่ในป่า|animals live in the forest
หาด|haat2|n|beach|1|nature|หาดนี้สะอาดมาก|this beach is very clean
ดิน|din1|n|soil; earth|1|nature|ต้นไม้ขึ้นในดิน|plants grow in the soil
หิน|hin5|n|stone; rock|1|nature|หินก้อนนี้หนักมาก|this rock is very heavy
ดวงจันทร์|duang1-jan1|n|moon|1|nature|ดวงจันทร์สวยมากคืนนี้|the moon is very beautiful tonight
ดวงอาทิตย์|duang1-aa1-tit4|n|sun|1|nature|ดวงอาทิตย์ขึ้นตอนเช้า|the sun rises in the morning
อากาศ|aa1-gaat2|n|weather; air|1|weather|วันนี้อากาศดีมาก|the weather is very good today
ฝน|fon5|n|rain|1|weather|วันนี้ฝนตก|it rains today
ลม|lom1|n|wind|1|weather|วันนี้ลมแรงมาก|the wind is very strong today
เมฆ|meek3|n|cloud|1|weather|ท้องฟ้ามีเมฆมาก|there are many clouds in the sky
แดด|dɛɛt2|n|sunshine|1|weather|วันนี้แดดแรงมาก|the sun is very strong today
ร้อน|rɔɔn4|adj|hot|1|weather|อากาศร้อนมาก|the weather is very hot
หนาว|naao5|adj|cold|1|weather|วันนี้หนาวมาก|it is very cold today
เย็น|yen1|adj|cool; cold|1|weather|น้ำเย็นมาก|the water is very cold
กิน|gin1|v|eat|1|verbs|ฉันกินข้าวแล้ว|I have already eaten
ดื่ม|dɯɯm2|v|drink|1|verbs|คุณดื่มอะไรครับ|what do you drink
นอน|nɔɔn1|v|sleep; lie down|1|verbs|เด็กนอนแล้ว|the child is asleep
ตื่น|dtɯɯn2|v|wake up|1|verbs|ฉันตื่นตอนเช้า|I wake up in the morning
เดิน|dɤɤn1|v|walk|1|verbs|เราเดินไปโรงเรียน|we walk to school
วิ่ง|wing3|v|run|1|verbs|เขาวิ่งเร็วมาก|he runs very fast
นั่ง|nang3|v|sit|1|verbs|เชิญนั่งตรงนี้ครับ|please sit here
ยืน|yɯɯn1|v|stand|1|verbs|เด็กยืนอยู่หน้าประตู|the child is standing at the door
พูด|puut3|v|speak; say|1|verbs|เขาพูดภาษาไทยเก่ง|he speaks Thai well
ฟัง|fang1|v|listen|1|verbs|ฉันชอบฟังเพลง|I like listening to music
ดู|duu1|v|look; watch|1|verbs|เราดูหนังด้วยกัน|we watch a movie together
อ่าน|aan2|v|read|1|verbs|ฉันอ่านหนังสือทุกวัน|I read books every day
เขียน|kian5|v|write|1|verbs|เขาเขียนชื่อบนกระดาษ|he writes his name on paper
เรียน|rian1|v|study; learn|1|verbs|ฉันเรียนภาษาไทย|I study Thai
สอน|sɔɔn5|v|teach|1|verbs|ครูสอนภาษาอังกฤษ|the teacher teaches English
ไป|bpai1|v|go|1|verbs|ฉันไปตลาดทุกเช้า|I go to the market every morning
มา|maa1|v|come|1|verbs|เพื่อนมาบ้านฉัน|my friend comes to my house
กลับ|glap2|v|return; go back|1|verbs|ฉันกลับบ้านแล้ว|I have gone back home
ถึง|tung5|v|arrive; reach|1|verbs|รถไฟถึงสถานีแล้ว|the train has arrived at the station
เปิด|bpɤɤt2|v|open; turn on|1|verbs|กรุณาเปิดประตู|please open the door
ปิด|bpit2|v|close; turn off|1|verbs|ร้านปิดแล้ว|the shop is closed
ทำ|tam1|v|do; make|1|verbs|แม่ทำอาหารทุกวัน|mother cooks every day
ใช้|chai4|v|use|1|verbs|ฉันใช้ปากกาสีดำ|I use a black pen
อาบน้ำ|aap2-naam4|v|take a bath; shower|1|verbs|ฉันอาบน้ำทุกเช้า|I take a shower every morning
ล้าง|laang4|v|wash|1|verbs|ล้างมือก่อนกินข้าว|wash your hands before eating
รอ|rɔɔ1|v|wait|1|verbs|กรุณารอสักครู่|please wait a moment
หา|haa5|v|look for; search|1|verbs|ฉันหากุญแจอยู่|I am looking for my key
เจอ|jɤɤ1|v|meet; find|1|verbs|ฉันเจอเพื่อนที่ตลาด|I met a friend at the market
ช่วย|chuai3|v|help|1|verbs|ช่วยฉันหน่อยได้ไหมคะ|could you help me
ถาม|taam5|v|ask (a question)|1|verbs|ฉันถามครูหนึ่งคำถาม|I ask the teacher a question
ตอบ|dtɔɔp2|v|answer|1|verbs|เด็กตอบถูกทุกข้อ|the child answers every item correctly
ขับ|kap2|v|drive|1|verbs|พ่อขับรถไปทำงาน|father drives to work
โทร|too1|v|call; phone|1|verbs|ฉันโทรหาแม่ทุกวัน|I call mother every day
รู้|ruu4|v|know|1|verbs|ฉันรู้ชื่อเขา|I know his name
เข้าใจ|kao3-jai1|v|understand|1|verbs|ผมไม่เข้าใจครับ|I do not understand
คิด|kit4|v|think|1|verbs|ฉันคิดว่าอาหารนี้อร่อย|I think this food is delicious
ดี|dii1|adj|good|1|adjs|อาหารที่นี่ดีมาก|the food here is very good
ใหญ่|yai2|adj|big; large|1|adjs|บ้านหลังนี้ใหญ่มาก|this house is very big
เล็ก|lek4|adj|small; little|1|adjs|แมวตัวนี้เล็กมาก|this cat is very small
ยาว|yaao1|adj|long|1|adjs|ถนนสายนี้ยาวมาก|this road is very long
สั้น|san3|adj|short (length)|1|adjs|กระโปรงตัวนี้สั้นไป|this skirt is too short
สูง|suung5|adj|tall; high|1|adjs|ภูเขาลูกนี้สูงมาก|this mountain is very high
ใหม่|mai2|adj|new|1|adjs|รถคันนี้ใหม่มาก|this car is very new
เก่า|gao2|adj|old (things)|1|adjs|บ้านหลังนี้เก่ามาก|this house is very old
ถูก|tuuk2|adj|cheap; correct|1|adjs|ของที่ตลาดถูกมาก|things at the market are very cheap
แพง|pɛɛng1|adj|expensive|1|adjs|นาฬิกาเรือนนี้แพงมาก|this watch is very expensive
เร็ว|reo4|adj|fast; quick|1|adjs|รถไฟเร็วมาก|the train is very fast
ช้า|chaa4|adj|slow|1|adjs|รถเมล์มาช้า|the bus comes slowly
ง่าย|ngaai3|adj|easy|1|adjs|ภาษาไทยไม่ง่ายครับ|Thai is not easy
ยาก|yaak3|adj|difficult|1|adjs|การบ้านวันนี้ยากมาก|today's homework is very hard
สวย|suai5|adj|beautiful|1|adjs|ดอกไม้นี้สวยมาก|this flower is very beautiful
สะอาด|sa2-aat2|adj|clean|1|adjs|ห้องนี้สะอาดมาก|this room is very clean
อร่อย|a2-rɔɔi2|adj|delicious; tasty|1|adjs|ก๋วยเตี๋ยวร้านนี้อร่อยมาก|the noodles at this shop are very delicious
เผ็ด|pet2|adj|spicy|1|adjs|อาหารนี้เผ็ดมาก|this food is very spicy
หวาน|waan5|adj|sweet|1|adjs|กาแฟนี้หวานเกินไป|this coffee is too sweet
เค็ม|kem1|adj|salty|1|adjs|ซุปนี้เค็มไป|this soup is too salty
ดีใจ|dii1-jai1|adj|happy; glad|1|feelings|ฉันดีใจมาก|I am very happy
เสียใจ|sia5-jai1|adj|sad; sorry|1|feelings|ฉันเสียใจมาก|I am very sad
โกรธ|groot2|v|be angry|1|feelings|แม่โกรธมาก|mother is very angry
กลัว|glua1|v|be afraid|1|feelings|เด็กกลัวหมา|the child is afraid of dogs
เหนื่อย|nɯai2|adj|tired|1|feelings|วันนี้ฉันเหนื่อยมาก|I am very tired today
หิว|hiu5|adj|hungry|1|feelings|ฉันหิวข้าวมาก|I am very hungry
ง่วง|nguang3|adj|sleepy|1|feelings|ผมง่วงนอนมากครับ|I am very sleepy
สนุก|sa2-nuk2|adj|fun; enjoyable|1|feelings|วันนี้สนุกมาก|today is a lot of fun
รัก|rak4|v|love|1|feelings|ฉันรักครอบครัว|I love my family
ชอบ|chɔɔp3|v|like|1|feelings|ฉันชอบอาหารไทย|I like Thai food
อยาก|yaak2|v|want; would like|1|feelings|ฉันอยากกินกาแฟ|I would like to drink coffee
คิดถึง|kit4-tung5|v|miss (someone)|1|feelings|ฉันคิดถึงแม่|I miss mother
เพลง|plɛɛng1|n|song|1|hobby|ฉันชอบฟังเพลงไทย|I like listening to Thai songs
ดนตรี|don1-dtrii1|n|music|1|hobby|น้องชอบดนตรี|my younger sibling likes music
หนัง|nang5|n|movie; film|1|hobby|เราดูหนังด้วยกัน|we watch a movie together
กีฬา|gii1-laa1|n|sport|1|hobby|ผมชอบเล่นกีฬา|I like playing sports
ฟุตบอล|fut4-bɔɔn1|n|football; soccer|1|hobby|เด็กชอบเล่นฟุตบอล|the children like playing football
เกม|geem1|n|game|1|hobby|น้องชอบเล่นเกม|my younger sibling likes playing games
เล่น|len3|v|play|1|hobby|เด็กเล่นอยู่ในสวน|the children are playing in the garden
ว่ายน้ำ|waai3-naam4|v|swim|1|hobby|ฉันชอบว่ายน้ำ|I like swimming
วาดรูป|waat3-ruup3|v|draw a picture|1|hobby|น้องชอบวาดรูป|my younger sibling likes drawing
ถ่ายรูป|taai2-ruup3|v|take a photo|1|hobby|ขอถ่ายรูปหน่อยได้ไหมครับ|may I take a photo
ร้องเพลง|rɔɔng4-plɛɛng1|v|sing|1|hobby|เธอร้องเพลงเพราะมาก|she sings very beautifully
ทำอาหาร|tam1-aa1-haan5|v|cook|1|hobby|ฉันชอบทำอาหาร|I like cooking
ท่องเที่ยว|tɔɔng3-tiao3|v|travel; tour|1|hobby|ฉันชอบท่องเที่ยวทุกปี|I like traveling every year
ยา|yaa1|n|medicine|2|health|ฉันต้องกินยาหลังอาหาร|I have to take medicine after meals
หมอ|mɔɔ5|n|doctor|2|health|หมอบอกว่าผมต้องพักผ่อน|The doctor said I must rest
พยาบาล|pa4-yaa1-baan1|n|nurse|2|health|พยาบาลคนนี้ใจดีมาก|This nurse is very kind
ปวด|bpuat2|v|to ache; to hurt|2|health|ฉันปวดหลังมาสามวันแล้ว|My back has ached for three days
เจ็บ|jep2|v|to hurt; to be painful|2|health|เท้าผมเจ็บมากเลย|My foot hurts a lot
ไข้|kai3|n|fever|2|health|ลูกมีไข้สูงตั้งแต่เมื่อคืน|My child has had a high fever since last night
ไอ|ai1|v|to cough|2|health|เขาไอทั้งคืนจนนอนไม่หลับ|He coughed all night and could not sleep
หวัด|wat2|n|common cold|2|health|ผมเป็นหวัดเพราะฝนตก|I caught a cold because of the rain
ผ่าตัด|paa2-dtat2|v|to operate; to have surgery|2|health|คุณพ่อต้องผ่าตัดสัปดาห์หน้า|Father must have surgery next week
แพ้|pɛɛ4|v|to be allergic; to lose|2|health|ผมแพ้ถั่วและอาหารทะเล|I am allergic to nuts and seafood
แข็งแรง|kɛng5-rɛɛng1|adj|strong; healthy|2|health|ปู่ยังแข็งแรงมากเลย|Grandpa is still very healthy
ออกกำลังกาย|ɔɔk2-gam1-lang1-gaai1|v|to exercise|2|health|ฉันออกกำลังกายทุกเช้า|I exercise every morning
นอนหลับ|nɔɔn1-lap2|v|to fall asleep|2|health|คืนนี้ผมนอนหลับสบายมาก|Tonight I slept very well
ท้องเสีย|tɔɔng4-sia5|v|to have diarrhea|2|health|ผมท้องเสียหลังกินอาหารริมทาง|I had diarrhea after eating street food
ร้านขายยา|raan4-kaai5-yaa1|n|pharmacy|2|health|มีร้านขายยาอยู่ใกล้โรงแรม|There is a pharmacy near the hotel
วัคซีน|wak4-siin1|n|vaccine|2|health|เด็กๆ ต้องฉีดวัคซีนตามกำหนด|Children must get vaccines on schedule
ตรวจ|dtruat2|v|to examine; to check|2|health|หมอจะตรวจเลือดให้คุณ|The doctor will check your blood
สุขภาพ|suk2-ka2-paap3|n|health|2|health|สุขภาพของแม่ดีขึ้นมาก|Mother's health has improved a lot
ขนม|ka2-nom5|n|snack; dessert|2|food|ฉันชอบขนมไทยมาก|I like Thai desserts very much
ขนมปัง|ka2-nom5-bpang1|n|bread|2|food|เช้านี้ผมกินขนมปังกับไข่|This morning I ate bread with egg
น้ำมัน|nam4-man1|n|oil|2|food|แม่ใช้น้ำมันทอดปลา|Mother uses oil to fry fish
เนื้อ|nɯa4|n|meat; beef|2|food|ผมไม่ค่อยกินเนื้อ|I do not eat meat much
อาหารทะเล|aa1-haan5-ta4-lee1|n|seafood|2|food|ร้านนี้มีอาหารทะเลสดมาก|This restaurant has very fresh seafood
ซุป|sup4|n|soup|2|food|ซุปร้อนๆ ช่วยให้อุ่นขึ้น|Hot soup helps you warm up
สลัด|sa2-lat2|n|salad|2|food|ฉันสั่งสลัดผักหนึ่งจาน|I ordered one plate of vegetable salad
เนย|nɤɤi1|n|butter|2|food|เขาทาเนยบนขนมปัง|He spread butter on the bread
น้ำตาล|nam4-dtaan1|n|sugar|2|food|กาแฟนี้ใส่น้ำตาลน้อยลงได้ไหม|Can you put less sugar in this coffee?
เกลือ|glɯa1|n|salt|2|food|ช่วยส่งเกลือให้หน่อยครับ|Please pass the salt
พริก|prik4|n|chili|2|food|อย่าใส่พริกมากนะคะ|Please do not put in too much chili
เผ็ด|pet2|adj|spicy|2|food|ส้มตำจานนี้เผ็ดมาก|This papaya salad is very spicy
เปรี้ยว|bpriao3|adj|sour|2|food|มะนาวลูกนี้เปรี้ยวมาก|This lime is very sour
หวาน|waan5|adj|sweet|2|food|ผมไม่ชอบกาแฟหวานเกินไป|I do not like coffee that is too sweet
เค็ม|kem1|adj|salty|2|food|ปลาตัวนี้เค็มไปหน่อย|This fish is a bit too salty
จืด|jɯɯt2|adj|bland|2|food|ซุปนี้จืดเกินไป|This soup is too bland
ชา|chaa1|n|tea|2|drink|ฉันอยากดื่มชาร้อนหนึ่งแก้ว|I would like a glass of hot tea
นม|nom1|n|milk|2|drink|เด็กๆ ดื่มนมทุกเช้า|The children drink milk every morning
เหล้า|lao3|n|liquor|2|drink|คุณพ่อไม่ดื่มเหล้าแล้ว|Father does not drink liquor anymore
น้ำแข็ง|nam4-kɛng5|n|ice|2|drink|ขอน้ำแข็งเพิ่มอีกหน่อยครับ|Please give me a bit more ice
น้ำผลไม้|nam4-pon5-la4-mai4|n|fruit juice|2|drink|ผมสั่งน้ำผลไม้เย็นหนึ่งแก้ว|I ordered one glass of cold fruit juice
กระเทียม|gra2-tiam1|n|garlic|2|fruitveg|แม่ใส่กระเทียมในผัดผัก|Mother puts garlic in the stir-fried vegetables
หัวหอม|hua5-hɔɔm5|n|onion|2|fruitveg|หัวหอมทำให้ฉันน้ำตาไหล|Onions make me cry
ถั่ว|tua2|n|bean; nut|2|fruitveg|ถั่วเป็นอาหารที่มีประโยชน์|Beans are a healthy food
ข้าวโพด|kaao3-poot3|n|corn|2|fruitveg|ข้าวโพดต้มหวานมาก|Boiled corn is very sweet
มันฝรั่ง|man1-fa2-rang3|n|potato|2|fruitveg|ลูกชอบมันฝรั่งทอด|My child likes fried potatoes
มะเขือเทศ|ma4-kɯa5-teet3|n|tomato|2|fruitveg|ฉันซื้อมะเขือเทศสองลูก|I bought two tomatoes
แตงกวา|dtɛɛng1-gwaa1|n|cucumber|2|fruitveg|แตงกวาช่วยให้เย็นสบาย|Cucumber helps you feel cool
ผัก|pak2|n|vegetable|2|fruitveg|คุณควรกินผักทุกวัน|You should eat vegetables every day
ผลไม้|pon5-la4-mai4|n|fruit|2|fruitveg|ตลาดนี้มีผลไม้หลายอย่าง|This market has many kinds of fruit
กล้วย|gluai3|n|banana|2|fruitveg|ลิงชอบกินกล้วย|Monkeys like to eat bananas
มะม่วง|ma4-muang3|n|mango|2|fruitveg|มะม่วงสุกหวานและหอม|Ripe mango is sweet and fragrant
ส้ม|som3|n|orange|2|fruitveg|เขาปอกส้มให้ลูก|He peeled an orange for his child
แตงโม|dtɛɛng1-moo1|n|watermelon|2|fruitveg|หน้าร้อนต้องกินแตงโม|In summer you have to eat watermelon
สับปะรด|sap2-bpa2-rot4|n|pineapple|2|fruitveg|สับปะรดผลนี้เปรี้ยวนิดหน่อย|This pineapple is slightly sour
องุ่น|a2-ngun3|n|grape|2|fruitveg|ฉันซื้อองุ่นหนึ่งกิโล|I bought a kilo of grapes
มะนาว|ma4-naao1|n|lime|2|fruitveg|บีบมะนาวลงในน้ำจิ้ม|Squeeze lime into the dipping sauce
ทุเรียน|tu4-rian1|n|durian|2|fruitveg|ทุเรียนมีกลิ่นแรงมาก|Durian has a very strong smell
ห้องนอน|hɔɔng3-nɔɔn1|n|bedroom|2|home|ห้องนอนของผมอยู่ชั้นสอง|My bedroom is on the second floor
ห้องครัว|hɔɔng3-krua1|n|kitchen|2|home|แม่อยู่ในห้องครัว|Mother is in the kitchen
ห้องน้ำ|hɔɔng3-nam4|n|bathroom; toilet|2|home|ขอโทษครับ ห้องน้ำอยู่ที่ไหน|Excuse me, where is the bathroom?
ประตู|bpra2-dtuu1|n|door|2|home|กรุณาปิดประตูด้วยค่ะ|Please close the door
หน้าต่าง|naa3-dtaang2|n|window|2|home|ช่วยเปิดหน้าต่างหน่อยได้ไหม|Could you open the window?
เตียง|dtiang1|n|bed|2|home|เตียงนี้นุ่มมาก|This bed is very soft
โต๊ะ|dto4|n|table; desk|2|home|หนังสืออยู่บนโต๊ะ|The book is on the table
เก้าอี้|gaao3-ii3|n|chair|2|home|เก้าอี้ตัวนี้นั่งสบาย|This chair is comfortable to sit on
ตู้เย็น|dtuu3-yen1|n|refrigerator|2|home|นมอยู่ในตู้เย็น|The milk is in the refrigerator
ผ้าห่ม|paa3-hom2|n|blanket|2|home|คืนนี้หนาวมาก ผมต้องใช้ผ้าห่ม|It is very cold tonight, I need a blanket
หมอน|mɔɔn5|n|pillow|2|home|ผมขอหมอนอีกใบได้ไหม|Could I have another pillow?
กุญแจ|gun1-jɛɛ1|n|key|2|home|ผมทำกุญแจหาย|I lost my key
กระจก|gra2-jok2|n|mirror; glass|2|home|เธอยืนส่องกระจกอยู่|She is standing looking in the mirror
พัดลม|pat4-lom1|n|electric fan|2|home|ห้องนี้ร้อน เปิดพัดลมหน่อย|This room is hot, turn on the fan
แอร์|ɛɛ1|n|air conditioner|2|home|ห้องนี้มีแอร์ไหม|Does this room have air conditioning?
ไฟฟ้า|fai1-faa4|n|electricity|2|home|เมื่อคืนไฟฟ้าดับ|The electricity went out last night
สวน|suan5|n|garden|2|home|คุณยายปลูกดอกไม้ในสวน|Grandmother grows flowers in the garden
ชั้น|chan4|n|floor; level|2|home|ลิฟต์ขึ้นไปชั้นห้าได้ไหม|Does the lift go up to the fifth floor?
ซักผ้า|sak4-paa3|v|to do laundry|2|home|วันนี้ฉันต้องซักผ้า|Today I have to do laundry
สะอาด|sa2-aat2|adj|clean|2|home|ห้องพักที่นี่สะอาดมาก|The rooms here are very clean
สกปรก|sok2-ga2-bprok2|adj|dirty|2|home|เสื้อตัวนี้สกปรกแล้ว|This shirt is dirty now
ธนาคาร|ta4-naa1-kaan1|n|bank|2|city|ธนาคารเปิดกี่โมงครับ|What time does the bank open?
ร้านอาหาร|raan4-aa1-haan5|n|restaurant|2|city|ร้านอาหารนี้อร่อยและราคาไม่แพง|This restaurant is tasty and not expensive
ร้านกาแฟ|raan4-gaa1-fɛɛ1|n|cafe|2|city|เรานัดกันที่ร้านกาแฟ|We arranged to meet at the cafe
ไปรษณีย์|bprai1-sa2-nii1|n|post office|2|city|ผมไปส่งพัสดุที่ไปรษณีย์|I went to send a parcel at the post office
สถานี|sa2-taa5-nii1|n|station|2|city|สถานีรถไฟอยู่ไม่ไกล|The train station is not far
สนามบิน|sa2-naam5-bin1|n|airport|2|city|เรามาถึงสนามบินเช้ามาก|We arrived at the airport very early
โรงแรม|roong1-rɛɛm1|n|hotel|2|city|โรงแรมนี้อยู่ใกล้ทะเล|This hotel is near the sea
ถนน|ta2-non5|n|road; street|2|city|ถนนสายนี้รถเยอะมาก|There is a lot of traffic on this road
สะพาน|sa2-paan1|n|bridge|2|city|เดินข้ามสะพานแล้วเลี้ยวซ้าย|Walk across the bridge and turn left
ห้างสรรพสินค้า|haang3-sap2-pa4-sin5-kaa4|n|department store|2|city|เราไปเดินห้างสรรพสินค้ากัน|Let us go to the department store
โรงหนัง|roong1-nang5|n|cinema|2|city|โรงหนังอยู่ชั้นบนสุด|The cinema is on the top floor
ตำรวจ|dtam1-ruat3|n|police|2|city|ตำรวจกำลังช่วยคนข้ามถนน|The police officer is helping people cross the road
หมู่บ้าน|mu2-baan3|n|village|2|city|ปู่อาศัยอยู่ในหมู่บ้านเล็กๆ|Grandpa lives in a small village
ชนบท|chon1-na4-bot2|n|countryside|2|city|ผมชอบอากาศในชนบท|I like the air in the countryside
เมือง|mɯang1|n|city; town|2|city|เมืองนี้ใหญ่และสวยงาม|This city is big and beautiful
ประเทศ|bpra2-teet3|n|country|2|city|คุณมาจากประเทศอะไร|Which country are you from?
ที่อยู่|tii3-yuu2|n|address|2|city|กรุณาเขียนที่อยู่ตรงนี้|Please write your address here
แผนที่|pɛɛn5-tii3|n|map|2|city|ผมดูแผนที่ในโทรศัพท์|I look at the map on my phone
รถ|rot4|n|vehicle; car|2|transport|รถของผมเสียที่กลางทาง|My car broke down on the way
รถไฟ|rot4-fai1|n|train|2|transport|รถไฟออกจากสถานีตอนเช้า|The train leaves the station in the morning
รถเมล์|rot4-mee1|n|bus|2|transport|ผมไปทำงานโดยรถเมล์|I go to work by bus
แท็กซี่|tɛk4-sii3|n|taxi|2|transport|เรียกแท็กซี่ให้หน่อยได้ไหม|Could you call a taxi for me?
จักรยาน|jak2-gra2-yaan1|n|bicycle|2|transport|เด็กๆ ปั่นจักรยานในสวน|The children ride bicycles in the park
มอเตอร์ไซค์|mɔɔ1-dtɤɤ1-sai1|n|motorcycle|2|transport|เขาขับมอเตอร์ไซค์ไปตลาด|He rides a motorcycle to the market
เรือ|rɯa1|n|boat|2|transport|เรือออกทุกชั่วโมง|The boat leaves every hour
เครื่องบิน|krɯang3-bin1|n|airplane|2|transport|เครื่องบินลงจอดตรงเวลา|The airplane landed on time
ตั๋ว|dtua5|n|ticket|2|transport|ผมซื้อตั๋วรถไฟสองใบ|I bought two train tickets
ขับรถ|kap2-rot4|v|to drive|2|transport|คุณพ่อขับรถไปทำงานทุกวัน|Father drives to work every day
จอดรถ|jɔɔt2-rot4|v|to park|2|transport|ที่นี่จอดรถได้ไหมครับ|Can I park here?
รถติด|rot4-dtit2|v|to be stuck in traffic|2|transport|วันนี้รถติดมาก|The traffic is very bad today
ไฟแดง|fai1-dɛɛng1|n|red light|2|transport|รถหยุดตรงไฟแดง|The car stopped at the red light
หลงทาง|long5-taang1|v|to get lost|2|transport|ผมหลงทางในเมืองใหญ่|I got lost in the big city
เลี้ยว|liao4|v|to turn|2|transport|เลี้ยวขวาตรงสี่แยกนะครับ|Turn right at the intersection
สี่แยก|sii2-yɛɛk3|n|intersection|2|transport|ร้านอยู่ใกล้สี่แยก|The shop is near the intersection
ขึ้น|kɯn3|v|to go up; to board|2|transport|เราขึ้นรถไฟเที่ยวเช้า|We boarded the morning train
ลง|long1|v|to get off; to go down|2|transport|ผมจะลงที่ป้ายหน้า|I will get off at the next stop
เปลี่ยน|bplian2|v|to change|2|transport|คุณต้องเปลี่ยนรถที่สถานีนี้|You must change trains at this station
ล่าช้า|laa3-chaa4|adj|delayed|2|transport|เที่ยวบินนี้ล่าช้าหนึ่งชั่วโมง|This flight is delayed by one hour
เร็ว|reo1|adj|fast|2|transport|รถไฟฟ้าเร็วกว่ารถเมล์|The skytrain is faster than the bus
ช้า|chaa4|adj|slow|2|transport|กรุณาพูดช้าๆ หน่อยครับ|Please speak slowly
เดินทาง|dɤɤn1-taang1|v|to travel|2|travel|เราจะเดินทางไปภูเก็ตพรุ่งนี้|We will travel to Phuket tomorrow
ท่องเที่ยว|tɔɔng3-tiao3|v|to go sightseeing|2|travel|ฉันชอบท่องเที่ยวต่างประเทศ|I like traveling abroad
นักท่องเที่ยว|nak4-tɔɔng3-tiao3|n|tourist|2|travel|นักท่องเที่ยวมาที่นี่เยอะมาก|Many tourists come here
หนังสือเดินทาง|nang5-sɯɯ5-dɤɤn1-taang1|n|passport|2|travel|อย่าลืมหนังสือเดินทางนะ|Do not forget your passport
กระเป๋า|gra2-bpao5|n|bag|2|travel|กระเป๋าใบนี้หนักมาก|This bag is very heavy
วีซ่า|wii1-saa3|n|visa|2|travel|ผมต้องขอวีซ่าก่อนไป|I must apply for a visa before going
จอง|jɔɔng1|v|to book; to reserve|2|travel|ผมอยากจองห้องพักสองคืน|I would like to book a room for two nights
ยกเลิก|yok4-lɤɤk3|v|to cancel|2|travel|เราต้องยกเลิกการเดินทาง|We had to cancel the trip
ที่พัก|tii3-pak4|n|accommodation|2|travel|ที่พักของเราอยู่ติดชายหาด|Our accommodation is right by the beach
ชายหาด|chaai1-haat2|n|beach|2|travel|เด็กๆ เล่นทรายที่ชายหาด|The children play in the sand at the beach
ทะเล|ta4-lee1|n|sea|2|travel|น้ำทะเลวันนี้ใสมาก|The sea water is very clear today
เกาะ|gɔ2|n|island|2|travel|เราไปเที่ยวเกาะสมุยกัน|Let us visit Samui island
ภูเขา|puu1-kao5|n|mountain|2|travel|เราเดินขึ้นภูเขาตอนเช้า|We climbed the mountain in the morning
น้ำตก|nam4-dtok2|n|waterfall|2|travel|น้ำตกที่นี่สวยมาก|The waterfall here is very beautiful
รูปถ่าย|ruup3-taai2|n|photograph|2|travel|ผมมีรูปถ่ายเยอะมาก|I have a lot of photographs
ถ่ายรูป|taai2-ruup3|v|to take photos|2|travel|ช่วยถ่ายรูปให้หน่อยได้ไหม|Could you take a photo for us?
ของฝาก|kɔɔng5-faak2|n|souvenir; gift to bring back|2|travel|ผมซื้อของฝากให้เพื่อน|I bought souvenirs for my friends
พักผ่อน|pak4-pɔɔn2|v|to relax; to rest|2|travel|วันหยุดนี้ฉันอยากพักผ่อนที่บ้าน|This holiday I want to rest at home
ถึง|tung5|v|to arrive|2|travel|เราถึงโรงแรมตอนเย็น|We arrived at the hotel in the evening
สถานที่|sa2-taan5-tii3|n|place; venue|2|travel|ที่นี่เป็นสถานที่ท่องเที่ยวที่มีชื่อเสียง|This is a famous tourist place
นักเรียน|nak4-rian1|n|student|2|school|นักเรียนทุกคนใส่ชุดนักเรียน|Every student wears a uniform
ครู|kruu1|n|teacher|2|school|ครูของผมใจดีมาก|My teacher is very kind
อาจารย์|aa1-jaan1|n|lecturer; professor|2|school|อาจารย์สอนภาษาอังกฤษที่มหาวิทยาลัย|The lecturer teaches English at the university
มหาวิทยาลัย|ma2-haa5-wit4-ta4-yaa1-lai1|n|university|2|school|พี่สาวเรียนที่มหาวิทยาลัยในกรุงเทพ|My older sister studies at a university in Bangkok
นักศึกษา|nak4-sɯk2-saa5|n|university student|2|school|นักศึกษาเต็มห้องสมุด|The library is full of university students
ห้องเรียน|hɔɔng3-rian1|n|classroom|2|school|ห้องเรียนนี้ใหญ่มาก|This classroom is very big
ห้องสมุด|hɔɔng3-sa2-mut2|n|library|2|school|ผมไปอ่านหนังสือที่ห้องสมุด|I go to read at the library
สมุด|sa2-mut2|n|notebook|2|school|ฉันจดทุกอย่างลงในสมุด|I write everything in my notebook
ปากกา|bpaak2-gaa1|n|pen|2|school|ขอยืมปากกาหน่อยได้ไหม|May I borrow a pen?
ดินสอ|din1-sɔɔ5|n|pencil|2|school|เด็กๆ วาดรูปด้วยดินสอ|The children draw pictures with pencils
กระดาษ|gra2-daat2|n|paper|2|school|ผมต้องใช้กระดาษเพิ่ม|I need more paper
การบ้าน|gaan1-baan3|n|homework|2|school|วันนี้ครูให้การบ้านเยอะมาก|The teacher gave a lot of homework today
สอบ|sɔɔp2|v|to take an exam|2|school|พรุ่งนี้ฉันมีสอบภาษาไทย|Tomorrow I have a Thai exam
คะแนน|ka4-nɛɛn1|n|score; marks|2|school|เขาได้คะแนนดีมาก|He got very good marks
เรียน|rian1|v|to study; to learn|2|school|ผมกำลังเรียนภาษาไทย|I am studying Thai
สอน|sɔɔn5|v|to teach|2|school|เธอสอนเด็กๆ ร้องเพลง|She teaches the children to sing
อ่าน|aan2|v|to read|2|school|ผมชอบอ่านหนังสือก่อนนอน|I like to read before bed
เขียน|kian5|v|to write|2|school|กรุณาเขียนชื่อของคุณตรงนี้|Please write your name here
คำศัพท์|kam1-sap2|n|vocabulary|2|school|ฉันท่องคำศัพท์ใหม่ทุกวัน|I memorize new vocabulary every day
ไวยากรณ์|wai1-yaa1-gɔɔn1|n|grammar|2|school|ไวยากรณ์ไทยไม่ยากเท่าไร|Thai grammar is not that hard
ประโยค|bpra2-yook3|n|sentence|2|school|ลองแต่งประโยคง่ายๆ ดูสิ|Try making a simple sentence
คำถาม|kam1-taam5|n|question|2|school|ผมมีคำถามหนึ่งข้อ|I have one question
คำตอบ|kam1-dtɔɔp2|n|answer|2|school|คำตอบของคุณถูกต้อง|Your answer is correct
เข้าใจ|kao3-jai1|v|to understand|2|school|ผมเข้าใจที่คุณพูดแล้ว|I understand what you said
ลืม|lɯɯm1|v|to forget|2|school|ฉันลืมสมุดไว้ที่บ้าน|I forgot my notebook at home
จำ|jam1|v|to remember|2|school|คุณจำชื่อเขาได้ไหม|Do you remember his name?
ฝึก|fɯk2|v|to practice|2|school|ผมฝึกพูดภาษาไทยทุกวัน|I practice speaking Thai every day
ผิด|pit2|adj|wrong|2|school|ประโยคนี้ผิดนิดหน่อย|This sentence is slightly wrong
ถูก|tuuk2|adj|correct; cheap|2|school|ข้อนี้ถูกแล้ว|This answer is correct
ความรู้|kwaam1-ruu4|n|knowledge|2|school|การอ่านช่วยเพิ่มความรู้|Reading helps increase knowledge
งาน|ngaan1|n|work; job; event|2|work|งานของผมสนุกมาก|My work is a lot of fun
ทำงาน|tam1-ngaan1|v|to work|2|work|พี่ชายทำงานที่ธนาคาร|My older brother works at a bank
บริษัท|bɔɔ1-ri4-sat2|n|company|2|work|บริษัทของเราอยู่ใกล้สถานี|Our company is near the station
เจ้านาย|jaao3-naai1|n|boss|2|work|เจ้านายของผมใจดี|My boss is kind
พนักงาน|pa4-nak4-ngaan1|n|employee; staff|2|work|พนักงานที่นี่สุภาพมาก|The staff here are very polite
เงินเดือน|ngɤn1-dɯan1|n|salary|2|work|เงินเดือนออกทุกสิ้นเดือน|Salary is paid at the end of every month
สำนักงาน|sam5-nak4-ngaan1|n|office|2|work|สำนักงานเปิดเก้าโมงเช้า|The office opens at nine in the morning
ประชุม|bpra2-chum1|v|to hold a meeting|2|work|พรุ่งนี้เรามีประชุมตอนเช้า|Tomorrow we have a meeting in the morning
สมัคร|sa2-mak2|v|to apply; to register|2|work|ผมอยากสมัครงานที่บริษัทนี้|I would like to apply for a job at this company
สัมภาษณ์|sam5-paat3|v|to interview|2|work|พรุ่งนี้ฉันมีสัมภาษณ์งาน|Tomorrow I have a job interview
อาชีพ|aa1-chiip3|n|occupation|2|work|คุณทำอาชีพอะไร|What is your occupation?
ลาออก|laa1-ɔɔk2|v|to resign|2|work|พี่สาวลาออกจากงานเมื่อวาน|My older sister resigned from her job yesterday
ลูกค้า|luuk3-kaa4|n|customer|2|work|ลูกค้าคนแรกมาตั้งแต่เช้า|The first customer came early in the morning
โรงงาน|roong1-ngaan1|n|factory|2|work|พ่อทำงานที่โรงงานใกล้บ้าน|Father works at a factory near home
ชาวนา|chaao1-naa1|n|rice farmer|2|work|ชาวนาตื่นแต่เช้าทุกวัน|The rice farmer wakes up early every day
พ่อค้า|pɔɔ3-kaa4|n|merchant; trader|2|work|พ่อค้าขายผลไม้อยู่ริมถนน|The merchant sells fruit by the road
ช่าง|chaang3|n|technician; craftsman|2|work|ผมโทรเรียกช่างมาซ่อมแอร์|I called a technician to fix the air conditioner
ทหาร|ta4-haan5|n|soldier|2|work|น้องชายเป็นทหารมาสองปีแล้ว|My younger brother has been a soldier for two years
วิศวกร|wit4-sa2-wa4-gɔɔn1|n|engineer|2|work|เธอเป็นวิศวกรที่เก่งมาก|She is a very skilled engineer
ทนายความ|ta4-naai1-kwaam1|n|lawyer|2|work|ทนายความช่วยดูสัญญาให้เรา|The lawyer helped look over the contract for us
ธุรกิจ|tu4-ra4-git2|n|business|2|work|ครอบครัวเรามีธุรกิจเล็กๆ|Our family has a small business
หัวหน้า|hua5-naa3|n|head; supervisor|2|work|หัวหน้าชมงานของผมวันนี้|My supervisor praised my work today
วันหยุด|wan1-yut2|n|day off; holiday|2|work|วันหยุดนี้ฉันอยากไปทะเล|This holiday I want to go to the sea
หยุด|yut2|v|to stop; to take a break|2|work|รถหยุดอยู่หน้าบ้าน|The car stopped in front of the house
เงิน|ngɤn1|n|money|2|money|ผมไม่มีเงินสดติดตัว|I do not have cash on me
ราคา|raa1-kaa1|n|price|2|money|ราคาเท่าไรครับ|How much is the price?
แพง|pɛɛng1|adj|expensive|2|money|กระเป๋าใบนี้แพงเกินไป|This bag is too expensive
ลดราคา|lot4-raa1-kaa1|v|to discount|2|money|ร้านนี้ลดราคาทุกอย่าง|This shop discounts everything
จ่าย|jaai2|v|to pay|2|money|ผมจะจ่ายด้วยบัตรเครดิต|I will pay by credit card
ทอน|tɔɔn1|v|to give change|2|money|ขอบคุณครับ ไม่ต้องทอน|Thank you, keep the change
เหรียญ|rian5|n|coin|2|money|ผมมีเหรียญสิบอยู่ในกระเป๋า|I have a ten baht coin in my bag
บัญชี|ban1-chii1|n|account|2|money|ผมอยากเปิดบัญชีใหม่|I would like to open a new account
ถอนเงิน|tɔɔn5-ngɤn1|v|to withdraw money|2|money|ฉันไปถอนเงินที่ตู้เอทีเอ็มทุกสัปดาห์|I withdraw money from the ATM every week
เงินสด|ngɤn1-sot2|n|cash|2|money|ร้านนี้รับเงินสดอย่างเดียว|This shop accepts cash only
โอนเงิน|oon1-ngɤn1|v|to transfer money|2|money|ผมโอนเงินให้คุณแล้ว|I have transferred the money to you
ภาษี|paa1-sii5|n|tax|2|money|ราคานี้รวมภาษีแล้ว|This price includes tax
เช่า|chao3|v|to rent|2|money|เราเช่าบ้านหลังเล็กใกล้ทะเล|We rented a small house near the sea
ค่าเช่า|kaa3-chao3|n|rent|2|money|ค่าเช่าห้องเดือนละเท่าไร|How much is the room rent per month?
รวย|ruai1|adj|rich|2|money|เขารวยมากแต่ใจดี|He is very rich but kind
จน|jon1|adj|poor|2|money|ครอบครัวเขาจนแต่มีความสุข|His family is poor but happy
หนี้|nii3|n|debt|2|money|เขาใช้หนี้หมดแล้ว|He has paid off all his debts
ยืม|yɯɯm1|v|to borrow|2|money|ผมขอยืมเงินคุณหน่อยได้ไหม|May I borrow some money from you?
คืน|kɯɯn1|v|to return; to give back|2|money|พรุ่งนี้ผมจะคืนเงินให้|Tomorrow I will give the money back
ประหยัด|bpra2-yat2|v|to save; to be thrifty|2|money|เราต้องประหยัดเงินให้มากขึ้น|We must save more money
ใบเสร็จ|bai1-set2|n|receipt|2|money|ขอใบเสร็จด้วยนะครับ|May I have a receipt, please?
กำไร|gam1-rai1|n|profit|2|money|ร้านนี้ได้กำไรดีมาก|This shop makes very good profit
ซื้อ|sɯɯ4|v|to buy|2|shop|ผมอยากซื้อรองเท้าคู่ใหม่|I want to buy a new pair of shoes
ขาย|kaai5|v|to sell|2|shop|ร้านนี้ขายของเก่า|This shop sells old things
ร้าน|raan4|n|shop|2|shop|ร้านนี้ปิดวันอาทิตย์|This shop closes on Sunday
ตะกร้า|dta2-graa3|n|basket|2|shop|ใส่ผลไม้ลงในตะกร้า|Put the fruit in the basket
ถุง|tung5|n|bag (plastic or paper)|2|shop|ขอถุงอีกใบได้ไหมครับ|Could I have another bag?
ขนาด|ka2-naat2|n|size|2|shop|เสื้อตัวนี้ขนาดอะไร|What size is this shirt?
ใหม่|mai2|adj|new|2|shop|ผมมีโทรศัพท์เครื่องใหม่|I have a new phone
เก่า|gao2|adj|old (things)|2|shop|รองเท้าคู่นี้เก่าแล้ว|These shoes are old now
ลอง|lɔɔng1|v|to try|2|shop|ลองชิมอันนี้ดูสิครับ|Try tasting this one
พอดี|pɔɔ1-dii1|adj|just right; fitting|2|shop|เสื้อตัวนี้ใส่พอดีเลย|This shirt fits just right
ใหญ่|yai2|adj|big|2|shop|ห้างนี้ใหญ่มาก|This department store is very big
เล็ก|lek4|adj|small|2|shop|ร้านนี้เล็กแต่น่ารัก|This shop is small but cute
เลือก|lɯak3|v|to choose|2|shop|คุณเลือกสีไหนดี|Which colour do you choose?
หมด|mot2|v|to run out; to be finished|2|shop|ขอโทษครับ สินค้าหมดแล้ว|Sorry, the goods are sold out
ของขวัญ|kɔɔng5-kwan5|n|gift|2|shop|ผมซื้อของขวัญให้แม่|I bought a gift for my mother
แถม|tɛɛm5|v|to give as a free extra|2|shop|ซื้อสองแถมหนึ่ง|Buy two get one free
สินค้า|sin5-kaa4|n|goods; product|2|shop|สินค้าที่นี่คุณภาพดี|The goods here are good quality
ต้นไม้|dton3-mai4|n|tree|2|nature|ต้นไม้ต้นนี้สูงมาก|This tree is very tall
ดอกไม้|dɔɔk2-mai4|n|flower|2|nature|ฉันซื้อดอกไม้ให้คุณแม่|I bought flowers for my mother
ใบไม้|bai1-mai4|n|leaf|2|nature|ใบไม้ร่วงเต็มสนาม|Leaves have fallen all over the field
หญ้า|yaa3|n|grass|2|nature|เด็กๆ นั่งเล่นบนหญ้า|The children sit and play on the grass
ป่า|bpaa2|n|forest|2|nature|ในป่ามีสัตว์หลายชนิด|There are many kinds of animals in the forest
แม่น้ำ|mɛɛ3-nam4|n|river|2|nature|แม่น้ำสายนี้ยาวมาก|This river is very long
ทราย|saai1|n|sand|2|nature|ทรายร้อนมากตอนเที่ยง|The sand is very hot at noon
หิน|hin5|n|stone; rock|2|nature|ก้อนหินก้อนนี้หนักมาก|This stone is very heavy
ดิน|din1|n|soil; earth|2|nature|ดินที่นี่เหมาะกับการปลูกผัก|The soil here is suitable for growing vegetables
ดวงอาทิตย์|duang1-aa1-tit4|n|sun|2|nature|ดวงอาทิตย์ขึ้นตอนหกโมงเช้า|The sun rises at six in the morning
ดวงจันทร์|duang1-jan1|n|moon|2|nature|คืนนี้ดวงจันทร์สวยมาก|The moon is very beautiful tonight
ดาว|daao1|n|star|2|nature|เราเห็นดาวเต็มท้องฟ้า|We saw stars all over the sky
ท้องฟ้า|tɔɔng4-faa4|n|sky|2|nature|ท้องฟ้าวันนี้สดใสมาก|The sky is very bright today
สิ่งแวดล้อม|sing2-wɛɛt3-lɔɔm4|n|environment|2|nature|เราต้องช่วยกันรักษาสิ่งแวดล้อม|We must help protect the environment
ธรรมชาติ|tam1-ma4-chaat3|n|nature|2|nature|ผมชอบเดินเล่นในธรรมชาติ|I like walking in nature
ขยะ|ka2-ya2|n|rubbish|2|nature|กรุณาทิ้งขยะลงถัง|Please put rubbish in the bin
ถ้ำ|tam3|n|cave|2|nature|เราเข้าไปดูถ้ำที่สวยมาก|We went to see a beautiful cave
คลื่น|klɯɯn3|n|wave|2|nature|คลื่นวันนี้แรงมาก|The waves are very strong today
ลม|lom1|n|wind|2|nature|ลมพัดแรงมากตอนเย็น|The wind blows very strong in the evening
อากาศ|aa1-gaat2|n|weather; air|2|weather|วันนี้อากาศดีมาก|The weather is very nice today
ฝน|fon5|n|rain|2|weather|เช้านี้ฝนตกหนัก|It rained heavily this morning
ร้อน|rɔɔn4|adj|hot|2|weather|เมืองไทยร้อนมากในเดือนเมษายน|Thailand is very hot in April
หนาว|naao5|adj|cold|2|weather|ที่เชียงใหม่หนาวมากตอนเช้า|It is very cold in Chiang Mai in the morning
เย็น|yen1|adj|cool|2|weather|ลมเย็นสบายมาก|The cool breeze feels very pleasant
แดด|dɛɛt2|n|sunshine|2|weather|แดดแรงมาก อย่าลืมกางร่ม|The sun is strong, do not forget your umbrella
เมฆ|meek3|n|cloud|2|weather|วันนี้เมฆเยอะ ฝนอาจตก|There are lots of clouds today, it may rain
พายุ|paa1-yu4|n|storm|2|weather|พายุกำลังจะเข้าภาคใต้|A storm is about to hit the south
ฟ้าร้อง|faa4-rɔɔng4|v|to thunder|2|weather|เมื่อคืนฟ้าร้องดังมาก|Last night the thunder was very loud
น้ำท่วม|nam4-tuam3|v|to flood|2|weather|หน้าฝนบางที่น้ำท่วม|In the rainy season some places flood
หมอก|mɔɔk2|n|fog|2|weather|เช้านี้มีหมอกหนามาก|There is very thick fog this morning
ฤดู|rɯ4-duu1|n|season|2|weather|คุณชอบฤดูอะไรที่สุด|Which season do you like best?
ชื้น|chɯɯn4|adj|humid|2|weather|อากาศที่นี่ชื้นมาก|The air here is very humid
แห้ง|hɛɛng3|adj|dry|2|weather|ผ้าตากไว้แห้งแล้ว|The clothes hung out are dry now
เปียก|bpiak2|adj|wet|2|weather|ผมตากฝนจนเปียกหมด|I got soaked in the rain
อบอุ่น|op2-un2|adj|warm|2|weather|ห้องนี้อบอุ่นมาก|This room is very warm
มืด|mɯɯt3|adj|dark|2|weather|ข้างนอกมืดแล้ว|It is dark outside now
สว่าง|sa2-waang2|adj|bright|2|weather|ห้องนี้สว่างดี|This room is nicely bright
ชอบ|chɔɔp3|v|to like|2|verbs|ฉันชอบฟังเพลงตอนเดินทาง|I like listening to music while traveling
รัก|rak4|v|to love|2|verbs|แม่รักลูกมาก|Mother loves her child very much
คิด|kit4|v|to think|2|verbs|ผมคิดว่าอาหารร้านนี้อร่อย|I think the food at this restaurant is tasty
เชื่อ|chɯa3|v|to believe|2|verbs|ฉันเชื่อว่าคุณทำได้|I believe you can do it
หวัง|wang5|v|to hope|2|verbs|ผมหวังว่าพรุ่งนี้อากาศดี|I hope the weather is good tomorrow
รอ|rɔɔ1|v|to wait|2|verbs|กรุณารอสักครู่ครับ|Please wait a moment
หา|haa5|v|to look for|2|verbs|ผมกำลังหากุญแจอยู่|I am looking for my key
เจอ|jɤɤ1|v|to meet; to find|2|verbs|เราเจอกันที่สถานีนะ|Let us meet at the station
เปิด|bpɤɤt2|v|to open; to turn on|2|verbs|เปิดประตูให้หน่อยได้ไหมครับ|Could you open the door for me?
ปิด|bpit2|v|to close; to turn off|2|verbs|ร้านนี้ปิดตอนสี่ทุ่ม|This shop closes at ten pm
เริ่ม|rɤɤm3|v|to begin|2|verbs|หนังจะเริ่มเวลาหกโมงเย็น|The film starts at six pm
จบ|jop2|v|to end; to finish|2|verbs|เรียนจบแล้วผมจะไปทำงาน|When I finish studying I will go to work
เสร็จ|set2|v|to be finished|2|verbs|งานของผมเสร็จแล้ว|My work is finished
ส่ง|song2|v|to send|2|verbs|ผมจะส่งอีเมลให้คุณพรุ่งนี้|I will send you an email tomorrow
รับ|rap4|v|to receive; to accept|2|verbs|ฉันรับพัสดุที่ไปรษณีย์แล้ว|I received the parcel at the post office
ใช้|chai4|v|to use|2|verbs|ผมใช้โทรศัพท์ถ่ายรูป|I use my phone to take photos
ทิ้ง|ting4|v|to throw away|2|verbs|อย่าทิ้งขยะลงทะเลนะ|Do not throw rubbish into the sea
เก็บ|gep2|v|to keep; to collect|2|verbs|ช่วยเก็บของให้เรียบร้อยด้วย|Please put the things away neatly
เดิน|dɤɤn1|v|to walk|2|verbs|เราเดินไปที่ตลาดทุกเช้า|We walk to the market every morning
วิ่ง|wing3|v|to run|2|verbs|เขาวิ่งในสวนทุกวัน|He runs in the park every day
ว่ายน้ำ|waai3-nam4|v|to swim|2|verbs|ผมว่ายน้ำเก่งมาก|I swim very well
นั่ง|nang3|v|to sit|2|verbs|เชิญนั่งก่อนครับ|Please sit down first
ยืน|yɯɯn1|v|to stand|2|verbs|เขายืนรอรถเมล์อยู่|He is standing waiting for the bus
ล้าง|laang4|v|to wash|2|verbs|ล้างมือก่อนกินข้าวนะ|Wash your hands before eating
ซ่อม|sɔɔm3|v|to repair|2|verbs|ช่างจะซ่อมรถให้พรุ่งนี้|The mechanic will repair the car tomorrow
ถาม|taam5|v|to ask|2|verbs|ผมขอถามหน่อยได้ไหม|May I ask something?
ตอบ|dtɔɔp2|v|to answer|2|verbs|เขาตอบคำถามได้ถูกต้อง|He answered the question correctly
บอก|bɔɔk2|v|to tell|2|verbs|ช่วยบอกทางให้หน่อยครับ|Please tell me the way
พูด|puut3|v|to speak|2|verbs|คุณพูดภาษาไทยได้ไหม|Can you speak Thai?
ฟัง|fang1|v|to listen|2|verbs|ผมชอบฟังเพลงเก่า|I like listening to old songs
เห็น|hen5|v|to see|2|verbs|คุณเห็นกระเป๋าของผมไหม|Did you see my bag?
ร้องเพลง|rɔɔng4-pleeng1|v|to sing|2|hobby|เธอร้องเพลงเพราะมาก|She sings very beautifully
หัวเราะ|hua5-rɔ4|v|to laugh|2|verbs|เด็กๆ หัวเราะเสียงดัง|The children laughed loudly
ยิ้ม|yim4|v|to smile|2|verbs|เธอยิ้มให้ทุกคน|She smiled at everyone
ฝัน|fan5|v|to dream|2|verbs|เมื่อคืนผมฝันแปลกมาก|Last night I had a very strange dream
เกิด|gɤɤt2|v|to be born|2|verbs|ผมเกิดที่เชียงใหม่|I was born in Chiang Mai
แต่งงาน|dtɛng2-ngaan1|v|to get married|2|verbs|พี่สาวจะแต่งงานปีหน้า|My older sister will get married next year
ตกลง|dtok2-long1|v|to agree|2|verbs|เราตกลงกันเรื่องราคาแล้ว|We have agreed on the price
แนะนำ|nɛ4-nam1|v|to recommend; to introduce|2|verbs|คุณแนะนำร้านอาหารดีๆ ได้ไหม|Can you recommend a good restaurant?
อธิบาย|a2-ti4-baai1|v|to explain|2|verbs|ครูอธิบายบทเรียนอีกครั้ง|The teacher explained the lesson again
พยายาม|pa4-yaa1-yaam1|v|to try; to make an effort|2|verbs|ผมจะพยายามให้ดีที่สุด|I will try my best
ง่าย|ngaai3|adj|easy|2|adjs|ข้อสอบวันนี้ง่ายมาก|Today's exam was very easy
ยาก|yaak3|adj|difficult|2|adjs|ภาษาจีนยากสำหรับผม|Chinese is difficult for me
สำคัญ|sam5-kan1|adj|important|2|adjs|การนอนหลับสำคัญมาก|Sleep is very important
จำเป็น|jam1-bpen1|adj|necessary|2|adjs|ต้องมีวีซ่าไหม ไม่จำเป็นครับ|Do I need a visa? It is not necessary
ปลอดภัย|bplɔɔt2-pai1|adj|safe|2|adjs|เมืองนี้ปลอดภัยมาก|This city is very safe
อันตราย|an1-dta2-raai1|adj|dangerous|2|adjs|ถนนสายนี้อันตรายตอนกลางคืน|This road is dangerous at night
สะดวก|sa2-duak2|adj|convenient|2|adjs|ที่พักนี้เดินทางสะดวกมาก|This accommodation is very convenient for travel
ว่าง|waang3|adj|free; vacant|2|adjs|พรุ่งนี้คุณว่างไหม|Are you free tomorrow?
ยุ่ง|yung3|adj|busy|2|adjs|ช่วงนี้ผมยุ่งมาก|I have been very busy lately
เงียบ|ngiap3|adj|quiet|2|adjs|ห้องสมุดเงียบมาก|The library is very quiet
ดัง|dang1|adj|loud|2|adjs|เพลงดังเกินไป ช่วยเบาหน่อย|The music is too loud, please turn it down
ลึก|lɯk4|adj|deep|2|adjs|สระน้ำนี้ลึกมาก|This pool is very deep
สูง|suung5|adj|tall; high|2|adjs|ภูเขาลูกนี้สูงมาก|This mountain is very high
ต่ำ|dtam2|adj|low|2|adjs|ราคาที่นี่ต่ำกว่าที่อื่น|Prices here are lower than elsewhere
หนา|naa5|adj|thick|2|adjs|หนังสือเล่มนี้หนามาก|This book is very thick
บาง|baang1|adj|thin (objects)|2|adjs|เสื้อตัวนี้บางและเย็นสบาย|This shirt is thin and cool
หนัก|nak2|adj|heavy|2|adjs|กระเป๋าใบนี้หนักเกินไป|This bag is too heavy
เบา|bao1|adj|light (weight)|2|adjs|โทรศัพท์เครื่องนี้เบามาก|This phone is very light
แข็ง|kɛng5|adj|hard|2|adjs|เตียงนี้แข็งเกินไป|This bed is too hard
นุ่ม|num3|adj|soft|2|adjs|ผ้าห่มผืนนี้นุ่มมาก|This blanket is very soft
สด|sot2|adj|fresh|2|adjs|ผักที่ตลาดสดมาก|The vegetables at the market are very fresh
แปลก|bplɛɛk2|adj|strange|2|adjs|ผมรู้สึกว่าที่นี่แปลกดี|I feel that this place is rather strange
น่าสนใจ|naa3-son5-jai1|adj|interesting|2|adjs|หนังสือเล่มนี้น่าสนใจมาก|This book is very interesting
น่ารัก|naa3-rak4|adj|cute; lovely|2|adjs|ลูกแมวตัวนี้น่ารักจัง|This kitten is so cute
น่ากลัว|naa3-glua1|adj|scary|2|adjs|หนังเรื่องนี้น่ากลัวมาก|This film is very scary
น่าเบื่อ|naa3-bɯa2|adj|boring|2|adjs|งานนี้น่าเบื่อนิดหน่อย|This job is a little boring
สนุก|sa2-nuk2|adj|fun; enjoyable|2|adjs|เมื่อวานเรากินข้าวกันสนุกมาก|Yesterday we had a lot of fun eating together
หล่อ|lɔɔ2|adj|handsome|2|adjs|พี่ชายของเธอหล่อมาก|Her older brother is very handsome
สวย|suai5|adj|beautiful|2|adjs|ชายหาดที่นี่สวยมาก|The beach here is very beautiful
ขี้เกียจ|kii3-giat2|adj|lazy|2|adjs|วันอาทิตย์ผมขี้เกียจออกจากบ้าน|On Sundays I am too lazy to leave the house
ขยัน|ka2-yan5|adj|diligent|2|adjs|น้องสาวผมขยันเรียนมาก|My younger sister studies very diligently
ใจดี|jai1-dii1|adj|kind|2|adjs|คุณลุงใจดีกับทุกคน|Uncle is kind to everyone
ใจเย็น|jai1-yen1|adj|calm; patient|2|adjs|ใจเย็นๆ ก่อนนะครับ|Calm down a bit, please
ตลก|dta2-lok2|adj|funny|2|adjs|เรื่องที่เขาเล่าตลกมาก|The story he told was very funny
ฉลาด|cha2-laat2|adj|clever|2|adjs|เด็กคนนี้ฉลาดมาก|This child is very clever
เก่ง|geng2|adj|skilled; good at|2|adjs|เธอเก่งภาษาอังกฤษ|She is good at English
สุภาพ|su2-paap3|adj|polite|2|adjs|เด็กๆ พูดสุภาพกับผู้ใหญ่|The children speak politely to adults
ซื่อสัตย์|sɯɯ3-sat2|adj|honest|2|adjs|เขาเป็นคนซื่อสัตย์มาก|He is a very honest person
เหมือน|mɯan5|adj|similar; the same|2|adjs|ลูกสาวหน้าเหมือนแม่มาก|The daughter looks very much like her mother
ต่าง|dtaang2|adj|different|2|adjs|สองเมืองนี้ต่างกันมาก|These two cities are very different
เหมาะ|mɔ2|adj|suitable|2|adjs|รองเท้าคู่นี้เหมาะกับคุณ|These shoes suit you
พิเศษ|pi4-seet2|adj|special|2|adjs|วันนี้เป็นวันพิเศษของเรา|Today is a special day for us
จริง|jing1|adj|true; real|2|adjs|เรื่องนี้เป็นเรื่องจริงหรือเปล่า|Is this story true?
เต็ม|dtem1|adj|full|2|adjs|โรงแรมเต็มทุกห้อง|The hotel is full in every room
เหงา|ngao5|adj|lonely|2|feelings|อยู่คนเดียวผมรู้สึกเหงา|Living alone I feel lonely
เหนื่อย|nɯai2|adj|tired|2|feelings|วันนี้ผมเหนื่อยมาก|I am very tired today
ง่วง|nguang3|adj|sleepy|2|feelings|ผมง่วงนอนมากหลังกินข้าว|I get very sleepy after eating
เศร้า|sao3|adj|sad|2|feelings|เขาเศร้ามากที่เพื่อนย้ายไป|He is very sad that his friend moved away
เสียใจ|sia5-jai1|adj|sad; sorry|2|feelings|ฉันเสียใจที่มาสาย|I am sorry that I came late
ดีใจ|dii1-jai1|adj|glad|2|feelings|ผมดีใจที่ได้เจอคุณ|I am glad to meet you
ตื่นเต้น|dtɯɯn2-dteen3|adj|excited|2|feelings|เด็กๆ ตื่นเต้นที่จะไปเที่ยว|The children are excited about going on a trip
กลัว|glua1|v|to be afraid|2|feelings|ลูกกลัวความมืด|My child is afraid of the dark
โกรธ|groot2|adj|angry|2|feelings|พ่อโกรธเพราะผมกลับดึก|Father is angry because I came back late
เบื่อ|bɯa2|adj|bored|2|feelings|วันนี้ฝนตก ผมเลยเบื่อมาก|It rained today so I was very bored
กังวล|gang1-won1|v|to worry|2|feelings|แม่กังวลเรื่องสุขภาพของปู่|Mother worries about Grandpa's health
ภูมิใจ|puum1-jai1|adj|proud|2|feelings|พ่อแม่ภูมิใจในตัวคุณ|Your parents are proud of you
ผิดหวัง|pit2-wang5|adj|disappointed|2|feelings|เขาผิดหวังกับผลสอบ|He is disappointed with the exam result
อาย|aai1|adj|shy; embarrassed|2|feelings|เด็กคนนี้อายเวลาพบคนแปลกหน้า|This child is shy around strangers
สงสาร|song5-saan5|v|to feel sorry for|2|feelings|ฉันสงสารเด็กคนนั้นมาก|I feel very sorry for that child
คิดถึง|kit4-tung5|v|to miss|2|feelings|ผมคิดถึงบ้านมาก|I miss home a lot
รู้สึก|ruu4-sɯk2|v|to feel|2|feelings|วันนี้คุณรู้สึกอย่างไรบ้าง|How do you feel today?
พอใจ|pɔɔ1-jai1|adj|satisfied|2|feelings|เราพอใจกับบริการที่นี่|We are satisfied with the service here
ประทับใจ|bpra2-tap4-jai1|adj|impressed|2|feelings|ผมประทับใจอาหารไทยมาก|I am very impressed with Thai food
สบายใจ|sa2-baai1-jai1|adj|relieved; at ease|2|feelings|ฟังแล้วผมสบายใจขึ้น|I felt more at ease after hearing that
เครียด|kriat3|adj|stressed|2|feelings|ช่วงสอบเธอเครียดมาก|She is very stressed during exams
หงุดหงิด|ngut2-ngit2|adj|annoyed|2|feelings|ผมหงุดหงิดเพราะรถติด|I am annoyed because of the traffic
คอมพิวเตอร์|kɔɔm1-piu1-dtɤɤ1|n|computer|2|tech|ผมทำงานกับคอมพิวเตอร์ทุกวัน|I work with a computer every day
โทรศัพท์|too1-ra4-sap2|n|telephone|2|tech|โทรศัพท์ของผมแบตหมด|My phone's battery has run out
อินเทอร์เน็ต|in1-tɤɤ1-net4|n|internet|2|tech|โรงแรมนี้มีอินเทอร์เน็ตฟรี|This hotel has free internet
อีเมล|ii1-meen1|n|email|2|tech|ผมส่งอีเมลหาคุณเมื่อเช้า|I sent you an email this morning
รหัสผ่าน|ra4-hat2-paan2|n|password|2|tech|ฉันลืมรหัสผ่านอีกแล้ว|I forgot my password again
แอป|ɛp2|n|app|2|tech|ผมโหลดแอปใหม่ลงโทรศัพท์|I downloaded a new app onto my phone
ข้อความ|kɔɔ3-kwaam1|n|message; text|2|tech|เขาส่งข้อความมาหาผม|He sent me a message
ข้อมูล|kɔɔ3-muun1|n|information; data|2|tech|ผมต้องการข้อมูลเพิ่มเติม|I need more information
กล้อง|glɔɔng3|n|camera|2|tech|กล้องตัวนี้ถ่ายรูปสวยมาก|This camera takes beautiful photos
ระบบ|ra4-bop2|n|system|2|tech|ระบบของที่นี่ใช้ง่ายมาก|The system here is very easy to use
สัญญาณ|san5-yaan1|n|signal|2|tech|ที่นี่สัญญาณโทรศัพท์ไม่ดี|The phone signal here is not good
ค้นหา|kon4-haa5|v|to search|2|tech|ผมค้นหาข้อมูลในอินเทอร์เน็ต|I search for information on the internet
พิมพ์|pim1|v|to type; to print|2|tech|เธอพิมพ์ข้อความเร็วมาก|She types messages very fast
โทร|too1|v|to call (by phone)|2|tech|ผมจะโทรหาคุณพรุ่งนี้|I will call you tomorrow
เครื่อง|krɯang3|n|machine; device|2|tech|เครื่องนี้ใช้ยากนิดหน่อย|This machine is a little hard to use
วัฒนธรรม|wat4-ta4-na4-tam1|n|culture|2|culture|ผมสนใจวัฒนธรรมไทย|I am interested in Thai culture
ประเพณี|bpra2-pee1-nii1|n|tradition|2|culture|สงกรานต์เป็นประเพณีที่สำคัญ|Songkran is an important tradition
เทศกาล|teet3-sa2-gaan1|n|festival|2|culture|เทศกาลนี้มีคนมาเที่ยวเยอะมาก|Many people visit during this festival
ศาสนา|saat2-sa2-naa5|n|religion|2|culture|ประเทศไทยมีหลายศาสนา|Thailand has many religions
พระ|pra4|n|monk|2|culture|พระเดินบิณฑบาตตอนเช้า|The monks walk for alms in the morning
วัด|wat4|n|temple|2|culture|เราไปไหว้พระที่วัดทุกปี|We go to pay respects at the temple every year
ศิลปะ|sin5-la2-bpa2|n|art|2|culture|ผมชอบดูศิลปะในพิพิธภัณฑ์|I like to look at art in museums
พิพิธภัณฑ์|pi4-pit4-ta4-pan1|n|museum|2|culture|พิพิธภัณฑ์ปิดวันจันทร์|The museum is closed on Monday
ดนตรี|don1-dtrii1|n|music|2|culture|ดนตรีไทยฟังแล้วผ่อนคลาย|Thai music is relaxing to listen to
ภาพยนตร์|paap3-pa4-yon1|n|film; movie|2|culture|เราไปดูภาพยนตร์ใหม่กัน|Let us go see the new film
ละคร|la4-kɔɔn1|n|drama; TV series|2|culture|แม่ชอบดูละครตอนเย็น|Mother likes watching dramas in the evening
นิทาน|ni4-taan1|n|folk tale|2|culture|คุณยายเล่านิทานให้เด็กฟัง|Grandmother tells the children a tale
นิยาย|ni4-yaai1|n|novel|2|culture|ผมกำลังอ่านนิยายเรื่องใหม่|I am reading a new novel
หนังสือพิมพ์|nang5-sɯɯ5-pim1|n|newspaper|2|culture|คุณปู่อ่านหนังสือพิมพ์ทุกเช้า|Grandfather reads the newspaper every morning
ข่าว|kaao2|n|news|2|culture|เมื่อเช้าผมดูข่าวทางทีวี|This morning I watched the news on TV
ชาติ|chaat3|n|nation|2|culture|คนไทยรักชาติและศาสนา|Thai people love their nation and religion
ธง|tong1|n|flag|2|culture|ธงชาติไทยมีสามสี|The Thai flag has three colours
โบราณ|boo1-raan1|adj|ancient|2|culture|วัดนี้เป็นวัดโบราณ|This temple is an ancient temple
ศิลปิน|sin5-la2-bpin1|n|artist|2|culture|ศิลปินคนนี้มีชื่อเสียงมาก|This artist is very famous
นักร้อง|nak4-rɔɔng4|n|singer|2|culture|นักร้องคนนี้เสียงเพราะมาก|This singer has a very beautiful voice
นักแสดง|nak4-sa2-dɛɛng1|n|actor|2|culture|นักแสดงคนนั้นเล่นเก่งมาก|That actor performs very well
งานอดิเรก|ngaan1-a2-di2-reek3|n|hobby|2|hobby|งานอดิเรกของผมคือถ่ายรูป|My hobby is taking photos
เล่น|len3|v|to play|2|hobby|เด็กๆ เล่นอยู่ในสวน|The children are playing in the garden
กีฬา|gii1-laa1|n|sport|2|hobby|คุณชอบกีฬาอะไร|What sport do you like?
ฟุตบอล|fut4-bɔɔn1|n|football|2|hobby|เราเล่นฟุตบอลทุกเย็นวันศุกร์|We play football every Friday evening
เทนนิส|ten1-nit4|n|tennis|2|hobby|พี่ชายเล่นเทนนิสเก่งมาก|My older brother plays tennis very well
ตกปลา|dtok2-bplaa1|v|to go fishing|2|hobby|คุณปู่ชอบตกปลาที่แม่น้ำ|Grandfather likes fishing at the river
วาดรูป|waat3-ruup3|v|to draw|2|hobby|ลูกชอบวาดรูปสัตว์|My child likes drawing animals
ปลูก|bpluuk2|v|to plant; to grow|2|hobby|แม่ชอบปลูกต้นไม้ในบ้าน|Mother likes growing plants at home
เกม|geem1|n|game|2|hobby|เด็กๆ เล่นเกมบนโทรศัพท์|The children play games on the phone
ไพ่|pai3|n|playing cards|2|hobby|เย็นนี้เรามาเล่นไพ่กัน|Let us play cards this evening
หมากรุก|maak2-ruk4|n|chess|2|hobby|คุณตาเล่นหมากรุกเก่งมาก|Grandfather plays chess very well
ว่าว|waao3|n|kite|2|hobby|เด็กๆ เล่นว่าวที่ชายหาด|The children fly kites at the beach
สะสม|sa2-som5|v|to collect|2|hobby|ผมสะสมแสตมป์เก่าๆ|I collect old stamps
เต้นรำ|dteen3-ram1|v|to dance|2|hobby|เราชอบเต้นรำตอนงานเลี้ยง|We like dancing at parties
ทีม|tiim1|n|team|2|hobby|ทีมของเราชนะเมื่อวาน|Our team won yesterday
ชนะ|cha4-na4|v|to win|2|hobby|ทีมไทยชนะสามต่อหนึ่ง|The Thai team won three to one
สนาม|sa2-naam5|n|field; court|2|hobby|เราเล่นฟุตบอลที่สนามโรงเรียน|We play football on the school field
ลูกบอล|luuk3-bɔɔn1|n|ball|2|hobby|เด็กเตะลูกบอลในสวน|The child kicks the ball in the park
นักกีฬา|nak4-gii1-laa1|n|athlete|2|hobby|นักกีฬาฝึกซ้อมทุกวัน|The athletes train every day
เพื่อนบ้าน|pɯan3-baan3|n|neighbour|2|people|เพื่อนบ้านของเราใจดีมาก|Our neighbours are very kind
แขก|kɛɛk2|n|guest|2|people|วันนี้เรามีแขกมาที่บ้าน|Today we have guests at home
เจ้าของ|jaao3-kɔɔng5|n|owner|2|people|เจ้าของร้านเป็นคนใจดี|The shop owner is a kind person
ชาวต่างชาติ|chaao1-dtaang2-chaat3|n|foreigner|2|people|ชาวต่างชาติมาเที่ยวเมืองไทยเยอะ|Many foreigners visit Thailand
ฝรั่ง|fa2-rang3|n|Westerner|2|people|มีฝรั่งนั่งอยู่ในร้านกาแฟ|A Westerner is sitting in the cafe
นักข่าว|nak4-kaao2|n|reporter|2|people|นักข่าวถามคำถามหลายข้อ|The reporter asked many questions
นักเขียน|nak4-kian5|n|writer|2|people|นักเขียนคนนี้เขียนนิยายดีมาก|This writer writes very good novels
ผู้ใหญ่|puu3-yai2|n|adult|2|people|ผู้ใหญ่ควรเป็นตัวอย่างที่ดี|Adults should set a good example
วัยรุ่น|wai1-run3|n|teenager|2|people|วัยรุ่นชอบฟังเพลงเกาหลี|Teenagers like listening to Korean music
ผู้หญิง|puu3-ying5|n|woman|2|people|ผู้หญิงคนนั้นเป็นครู|That woman is a teacher
ผู้ชาย|puu3-chaai1|n|man|2|people|ผู้ชายคนนั้นกำลังรอรถเมล์|That man is waiting for the bus
สมาชิก|sa2-maa1-chik4|n|member|2|people|ผมเป็นสมาชิกของห้องสมุด|I am a member of the library
คู่|kuu3|n|pair; couple|2|people|ผมซื้อรองเท้าหนึ่งคู่|I bought one pair of shoes
แฟน|fɛɛn1|n|girlfriend; boyfriend; partner|2|people|แฟนของผมชอบทำอาหาร|My partner likes cooking
คนรู้จัก|kon1-ruu4-jak2|n|acquaintance|2|people|เขาเป็นคนรู้จักของพ่อ|He is an acquaintance of my father
เจ้าหน้าที่|jaao3-naa3-tii3|n|official; staff member|2|people|เจ้าหน้าที่ช่วยเราเรื่องวีซ่า|The official helped us with the visa
ปัญหา|bpan1-haa5|n|problem|2|abstract|ผมมีปัญหาเล็กน้อยกับโทรศัพท์|I have a small problem with my phone
ความคิด|kwaam1-kit4|n|idea; thought|2|abstract|ความคิดของคุณน่าสนใจมาก|Your idea is very interesting
ความสุข|kwaam1-suk2|n|happiness|2|abstract|ความสุขอยู่ที่ใจของเรา|Happiness is in our hearts
ความจริง|kwaam1-jing1|n|truth|2|abstract|ผมอยากรู้ความจริง|I want to know the truth
ความฝัน|kwaam1-fan5|n|dream; aspiration|2|abstract|ความฝันของเธอคือเป็นหมอ|Her dream is to become a doctor
โอกาส|oo1-gaat2|n|opportunity|2|abstract|นี่เป็นโอกาสที่ดีมาก|This is a very good opportunity
เหตุผล|heet2-pon5|n|reason|2|abstract|คุณมีเหตุผลอะไรครับ|What is your reason?
วิธี|wi4-tii1|n|method; way|2|abstract|คุณมีวิธีไปสนามบินที่เร็วกว่านี้ไหม|Do you have a faster way to get to the airport?
เรื่อง|rɯang3|n|story; matter|2|abstract|เรื่องนี้ไม่ยากเลย|This matter is not difficult at all
ประสบการณ์|bpra2-sop2-gaan1|n|experience|2|abstract|เขามีประสบการณ์ทำงานเยอะ|He has a lot of work experience
ตัวอย่าง|dtua1-yaang2|n|example|2|abstract|ช่วยยกตัวอย่างให้ฟังหน่อยครับ|Please give me an example
ชีวิต|chii1-wit4|n|life|2|abstract|ชีวิตในเมืองใหญ่ยุ่งมาก|Life in a big city is very busy
อนาคต|a2-naa1-kot4|n|future|2|abstract|ผมวางแผนอนาคตไว้แล้ว|I have planned my future already
อดีต|a2-diit2|n|past|2|abstract|เขาไม่ชอบพูดถึงอดีต|He does not like talking about the past
ความหมาย|kwaam1-maai5|n|meaning|2|abstract|คำนี้มีความหมายว่าอะไร|What does this word mean?
ความลับ|kwaam1-lap4|n|secret|2|abstract|ผมเก็บความลับได้เสมอ|I can always keep a secret
ความเห็น|kwaam1-hen5|n|opinion|2|abstract|คุณมีความเห็นอย่างไรบ้าง|What is your opinion?
กฎหมาย|got2-maai5|n|law|2|abstract|ทุกคนต้องทำตามกฎหมาย|Everyone must follow the law
สัญญา|san5-yaa1|n|promise; contract|2|abstract|ผมให้สัญญาว่าจะมาตรงเวลา|I promise to come on time
เป้าหมาย|bpao3-maai5|n|goal|2|abstract|เป้าหมายของผมคือพูดไทยให้คล่อง|My goal is to speak Thai fluently
โชคดี|chook3-dii1|adj|lucky|2|abstract|คุณโชคดีมากที่ได้ตั๋วใบสุดท้าย|You are very lucky to get the last ticket
อุบัติเหตุ|u2-bat2-dti2-heet2|n|accident|2|abstract|เมื่อเช้ามีอุบัติเหตุบนถนน|There was an accident on the road this morning
ฉุกเฉิน|chuk2-chɤɤn5|adj|emergency|2|abstract|กรุณาโทรเบอร์ฉุกเฉินทันที|Please call the emergency number right away
สัมภาษณ์|sam5-paat3|v|interview|3|work|พรุ่งนี้ฉันต้องไปสัมภาษณ์งาน|Tomorrow I have to go to a job interview
บริษัท|bɔɔ1-ri4-sat2|n|company|3|work|บริษัทของเรากำลังรับพนักงานใหม่|Our company is hiring new employees
ตำแหน่ง|dtam1-nɛɛng2|n|position; post|3|work|เขาได้ตำแหน่งผู้จัดการ|He got the manager position
เงินเดือน|ngɤn1-dɯan1|n|salary|3|work|เงินเดือนของฉันออกทุกสิ้นเดือน|My salary is paid at the end of every month
สัญญา|san5-yaa1|n|contract; promise|3|work|กรุณาอ่านสัญญาให้ละเอียดก่อนเซ็น|Please read the contract carefully before signing
หัวหน้า|hua5-naa3|n|boss; leader|3|work|หัวหน้าของฉันใจดีมาก|My boss is very kind
เพื่อนร่วมงาน|pɯan3-ruam3-ngaan1|n|colleague|3|work|เพื่อนร่วมงานช่วยฉันทำรายงาน|My colleague helped me with the report
ประชุม|bpra2-chum1|v|to hold a meeting|3|work|พรุ่งนี้เช้าเราต้องประชุมกัน|Tomorrow morning we have to hold a meeting
โครงการ|kroong1-gaan1|n|project|3|work|โครงการนี้จะเสร็จภายในปีหน้า|This project will finish within next year
ลาออก|laa1-ɔɔk2|v|to resign|3|work|เขาตัดสินใจลาออกจากงาน|He decided to resign from his job
สมัคร|sa2-mak2|v|to apply; to register|3|work|ฉันอยากสมัครงานที่บริษัทนี้|I would like to apply for a job at this company
ผู้จัดการ|puu3-jat2-gaan1|n|manager|3|work|ผู้จัดการอนุมัติแผนของเราแล้ว|The manager has approved our plan
พนักงาน|pa4-nak4-ngaan1|n|employee; staff|3|work|พนักงานทุกคนต้องมาถึงก่อนเก้าโมง|Every employee must arrive before nine o'clock
ลูกค้า|luuk3-kaa4|n|customer|3|work|ลูกค้าพอใจกับบริการของเรา|The customer is satisfied with our service
ธุรกิจ|tu4-ra4-git2|n|business|3|work|พ่อของฉันทำธุรกิจส่วนตัว|My father runs his own business
รายได้|raai1-daai3|n|income|3|money|รายได้ของครอบครัวเราไม่แน่นอน|Our family's income is not steady
ค่าใช้จ่าย|kaa3-chai4-jaai2|n|expenses|3|money|ค่าใช้จ่ายเดือนนี้สูงมาก|This month's expenses are very high
ภาษี|paa1-sii5|n|tax|3|money|เราต้องจ่ายภาษีทุกปี|We have to pay taxes every year
ธนาคาร|ta4-naa1-kaan1|n|bank|3|money|ฉันมีบัญชีที่ธนาคารนี้|I have an account at this bank
ลงทุน|long1-tun1|v|to invest|3|money|เขาลงทุนในหุ้นหลายตัว|He invests in several stocks
หนี้|nii3|n|debt|3|money|ฉันอยากใช้หนี้ให้หมดเร็ว ๆ|I want to pay off my debt soon
ประหยัด|bpra2-yat2|v|to save; to be thrifty|3|money|เราควรประหยัดน้ำและไฟ|We should save water and electricity
ราคา|raa1-kaa1|n|price|3|money|ราคาสินค้าสูงขึ้นทุกปี|Prices of goods rise every year
ค่าเช่า|kaa3-chao3|n|rent|3|money|ค่าเช่าห้องแพงเกินไป|The room rent is too expensive
เศรษฐกิจ|seet2-ta2-git2|n|economy|3|money|เศรษฐกิจของประเทศกำลังดีขึ้น|The country's economy is getting better
เงินเฟ้อ|ngɤn1-fɤɤ4|n|inflation|3|money|เงินเฟ้อทำให้ของแพงขึ้น|Inflation makes things more expensive
ขาดทุน|kaat2-tun1|v|to lose money|3|money|ร้านนี้ขาดทุนมาสองปีแล้ว|This shop has been losing money for two years
กำไร|gam1-rai1|n|profit|3|money|ปีนี้บริษัทได้กำไรมากกว่าปีก่อน|This year the company made more profit than last year
ลดราคา|lot4-raa1-kaa1|v|to discount|3|money|ร้านกำลังลดราคาสินค้าทุกชิ้น|The shop is discounting every item
ใบเสร็จ|bai1-set2|n|receipt|3|money|กรุณาเก็บใบเสร็จไว้ด้วย|Please keep the receipt
บัญชี|ban1-chii1|n|account; accounting|3|money|ฉันเปิดบัญชีออมทรัพย์ใหม่|I opened a new savings account
ฝากเงิน|faak2-ngɤn1|v|to deposit money|3|money|ฉันไปฝากเงินที่ธนาคารทุกเดือน|I deposit money at the bank every month
ถอนเงิน|tɔɔn5-ngɤn1|v|to withdraw money|3|money|คุณถอนเงินได้ที่ตู้เอทีเอ็ม|You can withdraw money at the ATM
ผ่อน|pɔɔn2|v|to pay in installments|3|money|เราผ่อนรถคันนี้มาสามปีแล้ว|We have been paying for this car in installments for three years
ค่าธรรมเนียม|kaa3-tam1-niam1|n|fee|3|money|ธนาคารเก็บค่าธรรมเนียมเพิ่ม|The bank charges an extra fee
งบประมาณ|ngop4-bpra2-maan1|n|budget|3|money|งบประมาณของโครงการนี้มีจำกัด|This project's budget is limited
มูลค่า|muun1-kaa3|n|value|3|money|มูลค่าของบ้านหลังนี้สูงขึ้นมาก|The value of this house has risen a lot
มหาวิทยาลัย|ma4-haa5-wit4-ta4-yaa1-lai1|n|university|3|school|พี่สาวของฉันเรียนอยู่ที่มหาวิทยาลัย|My older sister studies at a university
นักศึกษา|nak4-sɯk2-saa5|n|university student|3|school|นักศึกษาทุกคนต้องส่งงานวันนี้|All students must hand in their work today
ปริญญา|bpa2-rin1-yaa1|n|degree|3|school|เขาจบปริญญาตรีเมื่อปีที่แล้ว|He finished his bachelor's degree last year
วิชา|wi4-chaa1|n|subject; course|3|school|วิชาที่ฉันชอบที่สุดคือประวัติศาสตร์|My favorite subject is history
หลักสูตร|lak2-suut2|n|curriculum; course|3|school|หลักสูตรนี้ใช้เวลาสองปี|This course takes two years
การบ้าน|gaan1-baan3|n|homework|3|school|วันนี้ครูให้การบ้านเยอะมาก|Today the teacher gave a lot of homework
สอบ|sɔɔp2|v|to take an exam|3|school|พรุ่งนี้ฉันต้องสอบวิชาคณิตศาสตร์|Tomorrow I have to take the math exam
คะแนน|ka4-nɛɛn1|n|score; points|3|school|คะแนนสอบของเขาสูงมาก|His exam score is very high
ความรู้|kwaam1-ruu4|n|knowledge|3|school|การอ่านหนังสือช่วยเพิ่มความรู้|Reading helps increase knowledge
ประสบการณ์|bpra2-sop2-gaan1|n|experience|3|school|เขามีประสบการณ์ทำงานสิบปี|He has ten years of work experience
ทักษะ|tak4-sa2|n|skill|3|school|ทักษะการสื่อสารสำคัญมาก|Communication skills are very important
งานวิจัย|ngaan1-wi4-jai1|n|research|3|school|งานวิจัยนี้เกี่ยวกับสิ่งแวดล้อม|This research is about the environment
ห้องสมุด|hɔɔng3-sa2-mut2|n|library|3|school|ฉันไปอ่านหนังสือที่ห้องสมุดทุกเสาร์|I go read at the library every Saturday
ข้อมูล|kɔɔ3-muun1|n|data; information|3|tech|เราต้องเก็บข้อมูลให้ปลอดภัย|We must keep the data safe
รหัสผ่าน|ra4-hat2-paan2|n|password|3|tech|อย่าบอกรหัสผ่านให้ใคร|Do not tell your password to anyone
เครือข่าย|krɯa1-kaai2|n|network|3|tech|เครือข่ายอินเทอร์เน็ตล่มตั้งแต่เช้า|The internet network has been down since morning
โทรศัพท์|too1-ra4-sap2|n|telephone|3|tech|โทรศัพท์ของฉันแบตเตอรี่หมดแล้ว|My phone's battery has run out
เทคโนโลยี|tek3-noo1-loo1-yii1|n|technology|3|tech|เทคโนโลยีเปลี่ยนชีวิตของเรามาก|Technology has changed our lives a lot
นวัตกรรม|na4-wat4-dta2-gam1|n|innovation|3|tech|บริษัทนี้สร้างนวัตกรรมใหม่ ๆ เสมอ|This company always creates new innovations
สื่อ|sɯɯ2|n|media; medium|3|tech|สื่อออนไลน์มีอิทธิพลต่อคนหนุ่มสาว|Online media influences young people
ความปลอดภัย|kwaam1-bplɔɔt2-pai1|n|safety; security|3|tech|ความปลอดภัยของข้อมูลสำคัญที่สุด|Data security is the most important
ระบบ|ra4-bop2|n|system|3|tech|ระบบของเราขัดข้องชั่วคราว|Our system is temporarily down
ค้นหา|kon4-haa5|v|to search|3|tech|ฉันค้นหาข้อมูลทางอินเทอร์เน็ต|I search for information on the internet
เชื่อมต่อ|chɯam3-dtɔɔ2|v|to connect|3|tech|ฉันเชื่อมต่อโทรศัพท์กับคอมพิวเตอร์ไม่ได้|I cannot connect my phone to the computer
ตั้งค่า|dtang3-kaa3|v|to set up; to configure|3|tech|ช่วยตั้งค่าเครื่องให้หน่อยได้ไหม|Could you help set up the machine
ประเพณี|bpra2-pee1-nii1|n|tradition|3|culture|ประเพณีสงกรานต์สนุกมาก|The Songkran tradition is a lot of fun
วัฒนธรรม|wat4-ta4-na4-tam1|n|culture|3|culture|ฉันสนใจวัฒนธรรมของประเทศไทย|I am interested in Thai culture
ศาสนา|saat2-sa2-naa5|n|religion|3|culture|คนไทยส่วนใหญ่นับถือศาสนาพุทธ|Most Thai people follow Buddhism
เทศกาล|teet3-sa2-gaan1|n|festival|3|culture|เทศกาลลอยกระทงจัดทุกปี|The Loy Krathong festival is held every year
ศิลปะ|sin5-la4-bpa2|n|art|3|culture|เธอชอบศิลปะและดนตรี|She likes art and music
ดนตรี|don1-dtrii1|n|music|3|culture|ดนตรีไทยมีเสียงไพเราะ|Thai music sounds beautiful
ภาพยนตร์|paap3-pa4-yon1|n|film; movie|3|culture|ภาพยนตร์เรื่องนี้ได้รางวัลมากมาย|This film won many awards
นิทาน|ni4-taan1|n|folktale; story|3|culture|คุณยายเล่านิทานให้หลานฟัง|Grandmother tells a story to her grandchild
นักร้อง|nak4-rɔɔng4|n|singer|3|culture|นักร้องคนนี้มีแฟนเพลงเยอะ|This singer has many fans
นักเขียน|nak4-kian5|n|writer|3|culture|นักเขียนคนนั้นเขียนนวนิยายหลายเล่ม|That writer wrote several novels
ละคร|la4-kɔɔn1|n|drama; play|3|culture|แม่ชอบดูละครตอนเย็น|Mom likes watching dramas in the evening
ผู้ชม|puu3-chom1|n|audience|3|culture|ผู้ชมปรบมือให้นักแสดง|The audience applauded the actors
งานอดิเรก|ngaan1-a2-di2-reek3|n|hobby|3|hobby|งานอดิเรกของฉันคือการถ่ายภาพ|My hobby is photography
ออกกำลังกาย|ɔɔk2-gam1-lang1-gaai1|v|to exercise|3|hobby|ฉันออกกำลังกายทุกเช้า|I exercise every morning
ท่องเที่ยว|tɔɔng3-tiao3|v|to travel; to tour|3|hobby|เราชอบท่องเที่ยวต่างจังหวัด|We like traveling to other provinces
ถ่ายภาพ|taai2-paap3|v|to take photographs|3|hobby|เขาถ่ายภาพวิวสวย ๆ ได้เก่ง|He is good at taking photos of beautiful scenery
ปั่นจักรยาน|bpan2-jak2-gra2-yaan1|v|to ride a bicycle|3|hobby|วันอาทิตย์เราไปปั่นจักรยานในสวน|On Sunday we go cycling in the park
วาดรูป|waat3-ruup3|v|to draw|3|hobby|น้องสาวชอบวาดรูปการ์ตูน|My younger sister likes drawing cartoons
ปลูกต้นไม้|bpluuk2-dton3-mai4|v|to plant trees|3|hobby|พ่อชอบปลูกต้นไม้หลังบ้าน|Dad likes planting trees behind the house
สะสม|sa2-som5|v|to collect|3|hobby|เขาสะสมแสตมป์มาตั้งแต่เด็ก|He has collected stamps since childhood
ตื่นเต้น|dtɯɯn2-dten3|adj|excited; nervous|3|feelings|ฉันตื่นเต้นมากก่อนขึ้นเวที|I was very nervous before going on stage
เครียด|kriat3|adj|stressed|3|feelings|ช่วงนี้งานเยอะ ฉันเลยเครียด|There is a lot of work lately, so I am stressed
กังวล|gang1-won1|v|to worry|3|feelings|แม่กังวลเรื่องสุขภาพของพ่อ|Mom worries about Dad's health
ผิดหวัง|pit2-wang5|adj|disappointed|3|feelings|ฉันผิดหวังกับผลสอบ|I am disappointed with the exam result
ภูมิใจ|puum1-jai1|adj|proud|3|feelings|พ่อแม่ภูมิใจในตัวลูก|The parents are proud of their child
อิจฉา|it2-chaa5|v|to envy|3|feelings|เธออิจฉาเพื่อนที่ได้ไปเที่ยวญี่ปุ่น|She envies her friend who went to Japan
เหงา|ngao5|adj|lonely|3|feelings|อยู่คนเดียวแล้วรู้สึกเหงา|Living alone, I feel lonely
อบอุ่น|op2-un2|adj|warm; cozy|3|feelings|ครอบครัวของเขาอบอุ่นมาก|His family is very warm
ประทับใจ|bpra2-tap4-jai1|v|to be impressed|3|feelings|ฉันประทับใจการบริการของร้านนี้|I am impressed with this shop's service
สงสาร|song5-saan5|v|to feel sorry for|3|feelings|ฉันสงสารเด็กที่ไม่มีบ้าน|I feel sorry for children without homes
เบื่อ|bɯa2|adj|bored; fed up|3|feelings|ฉันเบื่องานที่ทำซ้ำ ๆ|I am bored of repetitive work
ท้อแท้|tɔɔ4-tɛɛ4|adj|discouraged|3|feelings|เขารู้สึกท้อแท้หลังสอบตก|He felt discouraged after failing the exam
สับสน|sap2-son5|adj|confused|3|feelings|ฉันสับสนกับข้อมูลที่ได้ยิน|I am confused by the information I heard
คิดถึง|kit4-tung5|v|to miss|3|feelings|ฉันคิดถึงบ้านมาก|I miss home very much
สงบ|sa2-ngop2|adj|calm; peaceful|3|feelings|หมู่บ้านนี้เงียบและสงบ|This village is quiet and peaceful
ความคิดเห็น|kwaam1-kit4-hen5|n|opinion|3|abstract|ฉันอยากฟังความคิดเห็นของคุณ|I would like to hear your opinion
ความสัมพันธ์|kwaam1-sam5-pan1|n|relationship|3|abstract|ความสัมพันธ์ของเราดีขึ้นมาก|Our relationship has improved a lot
ความรับผิดชอบ|kwaam1-rap4-pit2-chɔɔp3|n|responsibility|3|abstract|เขามีความรับผิดชอบสูง|He has a high sense of responsibility
ปัญหา|bpan1-haa5|n|problem|3|abstract|เรากำลังช่วยกันแก้ปัญหา|We are working together to solve the problem
วิธี|wi4-tii1|n|method; way|3|abstract|คุณรู้วิธีแก้ปัญหานี้ไหม|Do you know a way to solve this problem
โอกาส|oo1-gaat2|n|opportunity; chance|3|abstract|นี่เป็นโอกาสที่ดีของเรา|This is a good opportunity for us
เสี่ยง|siang2|v|to risk|3|abstract|การลงทุนทุกอย่างมีความเสี่ยง|Every investment carries a risk
ผลลัพธ์|pon5-lap4|n|result; outcome|3|abstract|ผลลัพธ์ออกมาดีกว่าที่คิด|The result turned out better than expected
เหตุผล|heet2-pon5|n|reason|3|abstract|เขาไม่ได้บอกเหตุผลที่ลาออก|He did not say his reason for resigning
ข้อดี|kɔɔ3-dii1|n|advantage|3|abstract|ข้อดีของงานนี้คือเวลาที่ยืดหยุ่น|The advantage of this job is flexible time
ข้อเสีย|kɔɔ3-sia5|n|disadvantage|3|abstract|ข้อเสียของรถคือราคาแพง|The disadvantage of the car is the high price
เป้าหมาย|bpao3-maai5|n|goal|3|abstract|เป้าหมายของฉันคือเก็บเงินซื้อบ้าน|My goal is to save money to buy a house
ความฝัน|kwaam1-fan5|n|dream; aspiration|3|abstract|ความฝันของเธอคือเป็นหมอ|Her dream is to become a doctor
ความสำเร็จ|kwaam1-sam5-ret4|n|success|3|abstract|ความสำเร็จต้องใช้ความพยายาม|Success takes effort
เชื่อ|chɯa3|v|to believe|3|abstract|ฉันเชื่อว่าคุณทำได้|I believe that you can do it
เปรียบเทียบ|bpriap2-tiap3|v|to compare|3|abstract|ลองเปรียบเทียบราคาก่อนซื้อ|Try comparing prices before buying
ตัดสินใจ|dtat2-sin5-jai1|v|to decide|3|abstract|ฉันยังตัดสินใจไม่ได้|I still cannot decide
ยุติธรรม|yut4-dti2-tam1|adj|fair; just|3|abstract|ผู้พิพากษาต้องตัดสินอย่างยุติธรรม|A judge must decide fairly
เสรีภาพ|see5-rii1-paap3|n|freedom|3|abstract|ทุกคนมีเสรีภาพในการแสดงความคิดเห็น|Everyone has freedom of expression
สิทธิ|sit2-ti4|n|right|3|abstract|เด็กทุกคนมีสิทธิ์ได้เรียนหนังสือ|Every child has the right to education
กฎหมาย|got2-maai5|n|law|3|abstract|เราทุกคนต้องปฏิบัติตามกฎหมาย|We all must follow the law
สังคม|sang5-kom1|n|society|3|abstract|สังคมไทยกำลังเปลี่ยนไป|Thai society is changing
การเมือง|gaan1-mɯang1|n|politics|3|abstract|พ่อชอบดูข่าวการเมือง|Dad likes watching political news
รัฐบาล|rat4-ta2-baan1|n|government|3|abstract|รัฐบาลประกาศนโยบายใหม่|The government announced a new policy
การเลือกตั้ง|gaan1-lɯak3-dtang3|n|election|3|abstract|การเลือกตั้งจะจัดขึ้นเดือนหน้า|The election will be held next month
ประชาชน|bpra2-chaa1-chon1|n|citizens; the public|3|abstract|ประชาชนมาร่วมงานกันเป็นจำนวนมาก|A large number of people came to the event
ข่าว|kaao2|n|news|3|abstract|ฉันอ่านข่าวทุกเช้า|I read the news every morning
หนังสือพิมพ์|nang5-sɯɯ5-pim1|n|newspaper|3|abstract|ปู่ยังอ่านหนังสือพิมพ์ทุกวัน|Grandpa still reads the newspaper every day
รายงาน|raai1-ngaan1|n|report|3|abstract|ฉันต้องส่งรายงานภายในวันศุกร์|I have to submit the report by Friday
เหตุการณ์|heet2-gaan1|n|event; incident|3|abstract|เหตุการณ์นี้เกิดขึ้นเมื่อสิบปีก่อน|This event happened ten years ago
สถานการณ์|sa2-taa5-na4-gaan1|n|situation|3|abstract|สถานการณ์ตอนนี้ยังไม่ปกติ|The situation is still not normal
อุบัติเหตุ|u2-bat2-dti2-heet2|n|accident|3|city|เกิดอุบัติเหตุบนถนนใหญ่|An accident happened on the main road
ภัยพิบัติ|pai1-pi4-bat2|n|disaster|3|nature|ภัยพิบัติทำให้หลายคนเดือดร้อน|The disaster caused trouble for many people
น้ำท่วม|nam4-tuam3|n|flood|3|nature|ปีนี้น้ำท่วมหลายจังหวัด|This year many provinces were flooded
แผ่นดินไหว|pɛɛn2-din1-wai5|n|earthquake|3|nature|เมื่อคืนมีแผ่นดินไหวเล็กน้อย|There was a small earthquake last night
ภัยแล้ง|pai1-lɛɛng4|n|drought|3|nature|ภัยแล้งทำให้ชาวนาเดือดร้อน|The drought caused trouble for farmers
มลพิษ|mon1-la4-pit4|n|pollution|3|nature|มลพิษทางอากาศเป็นปัญหาใหญ่|Air pollution is a big problem
ขยะ|ka2-ya2|n|rubbish; trash|3|nature|กรุณาทิ้งขยะให้ถูกที่|Please throw rubbish in the right place
พลังงาน|pa4-lang1-ngaan1|n|energy|3|nature|เราควรใช้พลังงานอย่างประหยัด|We should use energy economically
ไฟฟ้า|fai1-faa4|n|electricity|3|nature|ไฟฟ้าดับทั้งหมู่บ้าน|The electricity went out in the whole village
ทรัพยากร|sap4-pa4-yaa1-gɔɔn1|n|resources|3|nature|เราต้องรักษาทรัพยากรธรรมชาติ|We must preserve natural resources
อนุรักษ์|a2-nu4-rak4|v|to conserve|3|nature|เราช่วยกันอนุรักษ์ป่าไม้|We help conserve the forests
ธรรมชาติ|tam1-ma4-chaat3|n|nature|3|nature|ฉันชอบเที่ยวธรรมชาติ|I like visiting nature
ภูเขา|puu1-kao5|n|mountain|3|nature|เราขึ้นภูเขาตอนเช้ามืด|We climbed the mountain in the early morning
แม่น้ำ|mɛɛ3-nam4|n|river|3|nature|แม่น้ำเจ้าพระยาไหลผ่านกรุงเทพ|The Chao Phraya River flows through Bangkok
ป่า|bpaa2|n|forest|3|nature|ป่าแห่งนี้มีสัตว์หลายชนิด|This forest has many kinds of animals
เกาะ|gɔ2|n|island|3|nature|เราไปเที่ยวเกาะช่วงปิดเทอม|We went to an island during the school break
ชายหาด|chaai1-haat2|n|beach|3|nature|ชายหาดแห่งนี้สะอาดมาก|This beach is very clean
สภาพอากาศ|sa2-paap3-aa1-gaat2|n|weather conditions|3|nature|สภาพอากาศวันนี้แปรปรวน|The weather conditions today are unstable
อุณหภูมิ|un1-ha2-puum1|n|temperature|3|nature|อุณหภูมิวันนี้สูงถึงสามสิบแปดองศา|Today's temperature reaches thirty-eight degrees
โลกร้อน|look3-rɔɔn4|n|global warming|3|nature|โลกร้อนทำให้น้ำแข็งขั้วโลกละลาย|Global warming makes polar ice melt
สุขภาพ|suk2-ka2-paap3|n|health|3|health|สุขภาพของคุณปู่ดีขึ้นแล้ว|Grandfather's health has improved
โรค|rook3|n|disease|3|health|โรคนี้ติดต่อกันได้ง่าย|This disease spreads easily
อาการ|aa1-gaan1|n|symptom|3|health|อาการของเขาดีขึ้นมาก|His symptoms have improved a lot
ผู้ป่วย|puu3-bpuai2|n|patient|3|health|ผู้ป่วยต้องพักผ่อนให้มาก|The patient must rest a lot
รักษา|rak4-saa5|v|to treat; to cure|3|health|หมอรักษาโรคนี้ได้|The doctor can treat this disease
ผ่าตัด|paa2-dtat2|v|to operate; to have surgery|3|health|คุณแม่ต้องผ่าตัดสัปดาห์หน้า|Mother must have surgery next week
ภูมิแพ้|puum1-pɛɛ4|n|allergy|3|health|ฉันเป็นภูมิแพ้ฝุ่น|I have a dust allergy
โภชนาการ|poo1-cha4-naa1-gaan1|n|nutrition|3|health|โภชนาการที่ดีสำคัญกับเด็ก|Good nutrition is important for children
ติดเชื้อ|dtit2-chɯa4|v|to be infected|3|health|แผลของเขาติดเชื้อ|His wound is infected
เหนื่อย|nɯai2|adj|tired|3|health|วันนี้ฉันเหนื่อยมากจริง ๆ|Today I am really tired
ฟื้นตัว|fɯɯn4-dtua1|v|to recover|3|health|เขากำลังฟื้นตัวหลังผ่าตัด|He is recovering after surgery
การจราจร|gaan1-ja2-raa1-jɔɔn1|n|traffic|3|city|การจราจรในกรุงเทพแย่มาก|Traffic in Bangkok is terrible
รถติด|rot4-dtit2|v|to be in a traffic jam|3|city|เช้านี้รถติดมากจนฉันไปสาย|This morning traffic was so bad that I was late
ชุมชน|chum1-chon1|n|community|3|city|ชุมชนของเราช่วยเหลือกันดี|Our community helps each other well
ที่อยู่อาศัย|tii3-yuu2-aa1-sai5|n|housing; residence|3|city|ที่อยู่อาศัยในเมืองมีราคาแพง|Housing in the city is expensive
สถานที่|sa2-taan5-tii3|n|place; venue|3|city|สถานที่จัดงานอยู่ใกล้สถานีรถไฟ|The venue is near the train station
สาธารณะ|saa5-taa1-ra4-na4|adj|public|3|city|เราควรรักษาสวนสาธารณะ|We should look after the public park
ย่าน|yaan3|n|neighborhood; area|3|city|ย่านนี้มีร้านอาหารเยอะ|This area has many restaurants
ชานเมือง|chaan1-mɯang1|n|suburb|3|city|ครอบครัวฉันอยู่ชานเมือง|My family lives in the suburbs
ตึก|dtɯk2|n|building|3|city|ตึกนี้สูงสี่สิบชั้น|This building is forty floors high
สะพาน|sa2-paan1|n|bridge|3|city|สะพานข้ามแม่น้ำกำลังซ่อม|The bridge across the river is being repaired
ถนน|ta2-non5|n|road; street|3|city|ถนนหน้าบ้านฉันกว้างมาก|The road in front of my house is very wide
ทางเท้า|taang1-taao4|n|pavement; sidewalk|3|city|กรุณาเดินบนทางเท้า|Please walk on the pavement
เมืองหลวง|mɯang1-luang5|n|capital city|3|city|กรุงเทพเป็นเมืองหลวงของประเทศไทย|Bangkok is the capital of Thailand
ชนบท|chon1-na4-bot2|n|countryside|3|city|ปู่ย่าของฉันอยู่ที่ชนบท|My grandparents live in the countryside
จังหวัด|jang1-wat2|n|province|3|city|ประเทศไทยมีเจ็ดสิบเจ็ดจังหวัด|Thailand has seventy-seven provinces
ประชากร|bpra2-chaa1-gɔɔn1|n|population|3|city|ประชากรของเมืองนี้เพิ่มขึ้นเร็ว|This city's population is growing fast
หนังสือเดินทาง|nang5-sɯɯ5-dɤɤn1-taang1|n|passport|3|travel|อย่าลืมเอาหนังสือเดินทางมาด้วย|Do not forget to bring your passport
ที่พัก|tii3-pak4|n|accommodation|3|travel|เราจองที่พักไว้แล้ว|We have already booked accommodation
สนามบิน|sa2-naam5-bin1|n|airport|3|travel|แท็กซี่พาเราไปสนามบิน|The taxi took us to the airport
กระเป๋าเดินทาง|gra2-bpao5-dɤɤn1-taang1|n|suitcase|3|travel|กระเป๋าเดินทางของฉันหนักมาก|My suitcase is very heavy
จองตั๋ว|jɔɔng1-dtua5|v|to book a ticket|3|travel|ฉันจองตั๋วเครื่องบินไว้แล้ว|I have already booked the plane ticket
เที่ยวบิน|tiao3-bin1|n|flight|3|travel|เที่ยวบินนี้ออกตอนเช้า|This flight leaves in the morning
มัคคุเทศก์|mak4-ku4-teet3|n|tour guide|3|travel|มัคคุเทศก์อธิบายประวัติของวัด|The guide explained the temple's history
นักท่องเที่ยว|nak4-tɔɔng3-tiao3|n|tourist|3|travel|นักท่องเที่ยวต่างชาติมาเยอะ|Many foreign tourists came
ระยะทาง|ra4-ya4-taang1|n|distance|3|travel|ระยะทางจากที่นี่ไปเชียงใหม่ไกลมาก|The distance from here to Chiang Mai is very far
เดินทาง|dɤɤn1-taang1|v|to travel; to commute|3|travel|ฉันเดินทางไปทำงานด้วยรถไฟฟ้า|I commute to work by skytrain
เปลี่ยน|bplian2|v|to change; to switch|3|travel|เราต้องเปลี่ยนรถที่สถานีหน้า|We have to change trains at the next station
ล่าช้า|laa3-chaa4|adj|delayed|3|travel|เที่ยวบินล่าช้าไปสองชั่วโมง|The flight was delayed by two hours
ยกเลิก|yok4-lɤɤk3|v|to cancel|3|travel|เขายกเลิกการเดินทางกะทันหัน|He canceled the trip suddenly
พยายาม|pa4-yaa1-yaam1|v|to try; to make an effort|3|verbs|ฉันจะพยายามให้เต็มที่|I will try my best
เปลี่ยนแปลง|bplian2-bplɛɛng1|v|to change|3|verbs|เมืองนี้เปลี่ยนแปลงไปมาก|This city has changed a lot
พัฒนา|pat4-ta4-naa1|v|to develop|3|verbs|เรากำลังพัฒนาระบบใหม่|We are developing a new system
ปรับปรุง|bprap2-bprung1|v|to improve|3|verbs|ร้านกำลังปรับปรุงใหม่|The shop is being renovated
สนับสนุน|sa2-nap2-sa2-nun5|v|to support|3|verbs|พ่อแม่สนับสนุนความฝันของฉัน|My parents support my dream
ช่วยเหลือ|chuai3-lɯa5|v|to help; to assist|3|verbs|เรามีหน้าที่ช่วยเหลือผู้อื่น|We have a duty to help others
ร่วมมือ|ruam3-mɯɯ1|v|to cooperate|3|verbs|ทุกฝ่ายต้องร่วมมือกัน|All sides must cooperate
แลกเปลี่ยน|lɛɛk3-bplian2|v|to exchange|3|verbs|เรามาแลกเปลี่ยนความคิดเห็นกัน|Let us exchange opinions
เสนอ|sa2-nɤɤ5|v|to propose; to offer|3|verbs|เขาเสนอแผนใหม่ในที่ประชุม|He proposed a new plan at the meeting
อธิบาย|a2-ti4-baai1|v|to explain|3|verbs|ครูอธิบายบทเรียนอย่างชัดเจน|The teacher explained the lesson clearly
แนะนำ|nɛ4-nam1|v|to recommend; to introduce|3|verbs|ช่วยแนะนำร้านอาหารดี ๆ ให้หน่อย|Please recommend a good restaurant
ตกลง|dtok2-long1|v|to agree|3|verbs|เราตกลงราคากันได้แล้ว|We have agreed on the price
ยอมรับ|yɔɔm1-rap4|v|to accept; to admit|3|verbs|เขายอมรับว่าตัวเองผิด|He admitted that he was wrong
ปฏิเสธ|bpa2-dti2-seet2|v|to refuse; to deny|3|verbs|เธอปฏิเสธข้อเสนอของเรา|She refused our offer
เห็นด้วย|hen5-duai3|v|to agree|3|verbs|ฉันเห็นด้วยกับความคิดของคุณ|I agree with your idea
คัดค้าน|kat4-kaan4|v|to oppose|3|verbs|ชาวบ้านคัดค้านโครงการนี้|The villagers oppose this project
วิจารณ์|wi4-jaan1|v|to criticize; to review|3|verbs|นักข่าววิจารณ์นโยบายของรัฐบาล|The journalist criticized the government's policy
ตรวจสอบ|dtruat2-sɔɔp2|v|to check; to inspect|3|verbs|กรุณาตรวจสอบข้อมูลอีกครั้ง|Please check the information again
ค้นพบ|kon4-pop4|v|to discover|3|verbs|นักวิทยาศาสตร์ค้นพบยาตัวใหม่|Scientists discovered a new drug
สร้าง|saang3|v|to build; to create|3|verbs|พวกเขากำลังสร้างสะพานใหม่|They are building a new bridge
ทำลาย|tam1-laai1|v|to destroy|3|verbs|ไฟไหม้ทำลายบ้านหลายหลัง|The fire destroyed several houses
ป้องกัน|bpɔɔng3-gan1|v|to prevent; to protect|3|verbs|การล้างมือช่วยป้องกันโรค|Washing hands helps prevent disease
ควบคุม|kuap3-kum1|v|to control|3|verbs|เราควบคุมค่าใช้จ่ายไม่ได้|We cannot control the expenses
ส่งเสริม|song2-sɤɤm5|v|to promote; to encourage|3|verbs|โรงเรียนส่งเสริมการอ่านหนังสือ|The school promotes reading
เรียกร้อง|riak3-rɔɔng4|v|to demand|3|verbs|พนักงานเรียกร้องค่าจ้างที่ยุติธรรม|The employees demanded fair wages
เกี่ยวข้อง|giao2-kɔɔng3|v|to be related|3|verbs|เรื่องนี้ไม่เกี่ยวข้องกับฉัน|This matter is not related to me
อนุญาต|a2-nu4-yaat3|v|to permit|3|verbs|ที่นี่ไม่อนุญาตให้สูบบุหรี่|Smoking is not permitted here
ห้าม|haam3|v|to forbid|3|verbs|ห้ามจอดรถตรงนี้|Parking here is forbidden
แก้ไข|gɛɛ3-kai5|v|to fix; to revise|3|verbs|ฉันต้องแก้ไขรายงานอีกครั้ง|I have to revise the report again
แข่งขัน|kɛɛng2-kan5|v|to compete|3|verbs|ทีมของเราแข่งขันในระดับประเทศ|Our team competes at the national level
ตั้งใจ|dtang3-jai1|v|to intend; to be determined|3|verbs|เขาตั้งใจเรียนมาก|He is very determined in his studies
เลี้ยง|liang4|v|to raise; to treat|3|verbs|ยายเลี้ยงฉันมาตั้งแต่เด็ก|Grandmother raised me since childhood
เปิดเผย|bpɤɤt2-pɤɤi5|v|to reveal|3|verbs|บริษัทเปิดเผยผลประกอบการแล้ว|The company has revealed its results
ปกป้อง|bpok2-bpɔɔng3|v|to protect; to defend|3|verbs|พ่อแม่ปกป้องลูกเสมอ|Parents always protect their children
เสียสละ|sia5-sa2-la2|v|to sacrifice|3|verbs|แม่เสียสละเพื่อลูกทุกอย่าง|Mother sacrifices everything for her children
ผลิต|pa2-lit2|v|to produce|3|verbs|โรงงานนี้ผลิตรถยนต์|This factory produces cars
ส่งออก|song2-ɔɔk2|v|to export|3|verbs|ประเทศไทยส่งออกข้าวมากที่สุด|Thailand exports rice the most
นำเข้า|nam1-kao3|v|to import|3|verbs|เรานำเข้าสินค้าจากต่างประเทศ|We import goods from abroad
สำคัญ|sam5-kan1|adj|important|3|adjs|เรื่องนี้สำคัญมาก|This matter is very important
จำเป็น|jam1-bpen1|adj|necessary|3|adjs|วีซ่าจำเป็นสำหรับการเดินทาง|A visa is necessary for travel
ปลอดภัย|bplɔɔt2-pai1|adj|safe|3|adjs|ย่านนี้ปลอดภัยมาก|This area is very safe
อันตราย|an1-dta2-raai1|adj|dangerous|3|adjs|ถนนสายนี้อันตรายตอนกลางคืน|This road is dangerous at night
ยุ่ง|yung3|adj|busy|3|adjs|ช่วงนี้ฉันยุ่งมาก|I am very busy lately
ยุ่งยาก|yung3-yaak3|adj|complicated|3|adjs|ขั้นตอนนี้ยุ่งยากเกินไป|This procedure is too complicated
สะดวก|sa2-duak2|adj|convenient|3|adjs|เดินทางด้วยรถไฟฟ้าสะดวกมาก|Traveling by skytrain is very convenient
ชัดเจน|chat4-jeen1|adj|clear|3|adjs|คำอธิบายของเขาชัดเจนมาก|His explanation is very clear
เหมาะสม|mɔ2-som5|adj|suitable|3|adjs|เวลานี้เหมาะสมที่สุดแล้ว|This time is the most suitable
พอใจ|pɔɔ1-jai1|adj|satisfied|3|adjs|ฉันพอใจกับห้องพักนี้|I am satisfied with this room
สมบูรณ์|som5-buun1|adj|complete; perfect|3|adjs|แผนนี้ยังไม่สมบูรณ์|This plan is not complete yet
ซับซ้อน|sap4-sɔɔn4|adj|complex|3|adjs|ปัญหานี้ซับซ้อนมาก|This problem is very complex
เรียบง่าย|riap3-ngaai3|adj|simple; plain|3|adjs|เขาใช้ชีวิตอย่างเรียบง่าย|He lives a simple life
แปลก|bplɛɛk2|adj|strange|3|adjs|เมื่อวานฉันฝันแปลก ๆ|I had a strange dream yesterday
ทันสมัย|tan1-sa2-mai5|adj|modern|3|adjs|ห้างนี้ทันสมัยมาก|This mall is very modern
โบราณ|boo1-raan1|adj|ancient|3|adjs|วัดนี้เป็นโบราณสถาน|This temple is an ancient site
ยั่งยืน|yang3-yɯɯn1|adj|sustainable; lasting|3|adjs|เราต้องพัฒนาอย่างยั่งยืน|We must develop sustainably
เข้มงวด|kem3-ngaat3|adj|strict|3|adjs|ครูคนนี้เข้มงวดมาก|This teacher is very strict
ใจกว้าง|jai1-gwaang3|adj|open-minded; generous|3|adjs|หัวหน้าของฉันใจกว้าง|My boss is open-minded
ขี้เกียจ|kii3-giat2|adj|lazy|3|adjs|วันหยุดฉันขี้เกียจออกจากบ้าน|On days off I am too lazy to leave the house
ขยัน|ka2-yan5|adj|hardworking|3|adjs|น้องชายเป็นคนขยัน|My younger brother is hardworking
ซื่อสัตย์|sɯɯ3-sat2|adj|honest|3|adjs|พนักงานคนนี้ซื่อสัตย์|This employee is honest
สุภาพ|su2-paap3|adj|polite|3|adjs|เด็กคนนี้สุภาพมาก|This child is very polite
ก้าวร้าว|gaao3-raao4|adj|aggressive|3|adjs|เขามีนิสัยก้าวร้าว|He has an aggressive character
เป็นกันเอง|bpen1-gan1-eeng1|adj|friendly; informal|3|adjs|เจ้าของร้านเป็นกันเองมาก|The shop owner is very friendly
รุนแรง|run1-rɛɛng1|adj|severe; violent|3|adjs|พายุครั้งนี้รุนแรงมาก|This storm is very severe
ร้ายแรง|raai4-rɛɛng1|adj|serious; grave|3|adjs|อุบัติเหตุครั้งนี้ร้ายแรง|This accident is serious
ธรรมดา|tam1-ma4-daa1|adj|ordinary|3|adjs|วันนี้เป็นวันธรรมดา|Today is an ordinary day
พิเศษ|pi4-seet2|adj|special|3|adjs|วันนี้เป็นวันพิเศษของเรา|Today is a special day for us
ทั่วไป|tua3-bpai1|adj|general; common|3|adjs|นี่เป็นปัญหาทั่วไปของคนเมือง|This is a common problem of city people
ต่างประเทศ|dtaang2-bpra2-teet3|n|abroad; foreign country|3|travel|พี่ชายของฉันไปเรียนต่างประเทศ|My older brother went to study abroad
ผู้ใหญ่|puu3-yai2|n|adult|3|people|ผู้ใหญ่ควรเป็นตัวอย่างที่ดี|Adults should set a good example
วัยรุ่น|wai1-run3|n|teenager|3|people|วัยรุ่นสมัยนี้ใช้โทรศัพท์ตลอดเวลา|Teenagers nowadays use their phones all the time
ผู้สูงอายุ|puu3-suung5-aa1-yu4|n|elderly person|3|people|ผู้สูงอายุควรออกกำลังกายเบา ๆ|Elderly people should exercise lightly
เพื่อนบ้าน|pɯan3-baan3|n|neighbor|3|people|เพื่อนบ้านของเราใจดีมาก|Our neighbor is very kind
คนรัก|kon1-rak4|n|lover; partner|3|people|เขาพาคนรักไปเที่ยวทะเล|He took his partner to the sea
ญาติ|yaat3|n|relative|3|people|ญาติของฉันมาจากต่างจังหวัด|My relatives came from another province
เจ้าของ|jao3-kɔɔng5|n|owner|3|people|เจ้าของร้านเป็นคนใจดี|The shop owner is a kind person
ผู้เชี่ยวชาญ|puu3-chiao3-chaan1|n|expert|3|people|เขาเป็นผู้เชี่ยวชาญด้านเทคโนโลยี|He is an expert in technology
นักการเมือง|nak4-gaan1-mɯang1|n|politician|3|people|นักการเมืองคนนี้เป็นที่รู้จักมาก|This politician is very well known
ทนายความ|ta4-naai1-kwaam1|n|lawyer|3|people|ฉันต้องปรึกษาทนายความ|I have to consult a lawyer
ทหาร|ta4-haan5|n|soldier|3|people|พี่ชายของเขาเป็นทหาร|His older brother is a soldier
นักข่าว|nak4-kaao2|n|journalist|3|people|นักข่าวสัมภาษณ์นายกรัฐมนตรี|The journalist interviewed the prime minister
เยาวชน|yao1-wa4-chon1|n|youth|3|people|เยาวชนควรมีโอกาสเรียนรู้|Young people should have opportunities to learn
ชาวบ้าน|chaao1-baan3|n|villager|3|people|ชาวบ้านช่วยกันสร้างศาลา|The villagers helped build a pavilion
ผู้บริโภค|puu3-bɔɔ1-ri4-pook3|n|consumer|3|people|ผู้บริโภคควรเลือกสินค้าอย่างระวัง|Consumers should choose products carefully
อาสาสมัคร|aa1-saa5-sa2-mak2|n|volunteer|3|people|อาสาสมัครมาช่วยงานวันนี้|Volunteers came to help with the event today
ผู้นำ|puu3-nam1|n|leader|3|people|ผู้นำที่ดีต้องรับฟังคนอื่น|A good leader must listen to others
สมาชิก|sa2-maa1-chik4|n|member|3|people|สมาชิกของชมรมมีห้าสิบคน|The club has fifty members
นายกรัฐมนตรี|naa1-yok4-rat4-ta2-mon1-dtrii1|n|prime minister|3|people|นายกรัฐมนตรีแถลงข่าววันนี้|The prime minister gave a press statement today
ประชาธิปไตย|bpra2-chaa1-ti4-bpa2-dtai1|n|democracy|3|abstract|ประชาธิปไตยให้สิทธิแก่ประชาชน|Democracy gives rights to the people
สื่อมวลชน|sɯɯ2-muan1-chon1|n|mass media|3|abstract|สื่อมวลชนรายงานข่าวนี้ทันที|The mass media reported this news immediately
เศรษฐกิจ|seet2-ta2-git2|n|economy|4|money|เศรษฐกิจของประเทศกำลังเติบโต|The country's economy is growing
การเมือง|gaan1-mɯang1|n|politics|4|abstract|เขาสนใจการเมืองมาตั้งแต่เด็ก|He has been interested in politics since childhood
รัฐบาล|rat4-ta2-baan1|n|government|4|abstract|รัฐบาลประกาศนโยบายใหม่|The government announced a new policy
ประชาธิปไตย|bpra2-chaa1-tip4-bpa2-dtai1|n|democracy|4|abstract|ประเทศนี้ปกครองด้วยระบอบประชาธิปไตย|This country is governed by democracy
การเลือกตั้ง|gaan1-lɯak3-dtang3|n|election|4|abstract|การเลือกตั้งจะจัดขึ้นเดือนหน้า|The election will be held next month
นโยบาย|na4-yoo1-baai1|n|policy|4|abstract|นโยบายนี้ช่วยเหลือเกษตรกร|This policy helps farmers
กฎหมาย|got2-maai5|n|law|4|abstract|ทุกคนต้องปฏิบัติตามกฎหมาย|Everyone must follow the law
ศาล|saan5|n|court|4|abstract|คดีนี้อยู่ในการพิจารณาของศาล|This case is before the court
สิทธิ|sit2|n|right; entitlement|4|abstract|ทุกคนมีสิทธิเท่าเทียมกัน|Everyone has equal rights
ความยุติธรรม|kwaam1-yut4-dti2-tam1|n|justice|4|abstract|สังคมต้องการความยุติธรรม|Society needs justice
ภาษี|paa1-sii5|n|tax|4|money|ประชาชนต้องเสียภาษีทุกปี|Citizens must pay taxes every year
เงินเฟ้อ|ngɤn1-fɤɤ4|n|inflation|4|money|เงินเฟ้อทำให้ของแพงขึ้น|Inflation makes things more expensive
งบประมาณ|ngop4-bpra2-maan1|n|budget|4|money|โครงการนี้ใช้งบประมาณมาก|This project uses a large budget
การลงทุน|gaan1-long1-tun1|n|investment|4|money|การลงทุนมีความเสี่ยงเสมอ|Investment always carries risk
ผู้บริโภค|puu3-bɔɔ1-ri4-pook3|n|consumer|4|money|ผู้บริโภคควรเลือกสินค้าอย่างระมัดระวัง|Consumers should choose goods carefully
อุตสาหกรรม|ut2-saa5-ha2-gam1|n|industry|4|work|อุตสาหกรรมท่องเที่ยวสร้างรายได้มาก|The tourism industry earns a lot
เกษตรกร|ga2-seet2-dtra2-gɔɔn1|n|farmer|4|work|เกษตรกรเก็บเกี่ยวข้าวในฤดูหนาว|Farmers harvest rice in the cool season
การส่งออก|gaan1-song2-ɔɔk2|n|export|4|money|การส่งออกข้าวเพิ่มขึ้นในปีนี้|Rice exports rose this year
การนำเข้า|gaan1-nam1-kaao3|n|import|4|money|การนำเข้าน้ำมันมีราคาสูง|Oil imports are costly
รายได้|raai1-daai3|n|income|4|money|รายได้ของครอบครัวลดลง|The family's income has dropped
รายจ่าย|raai1-jaai2|n|expenses|4|money|เราควรควบคุมรายจ่ายทุกเดือน|We should control expenses every month
หนี้สิน|nii3-sin5|n|debt|4|money|เขามีหนี้สินมากมาย|He has a lot of debt
ดอกเบี้ย|dɔɔk2-bia3|n|interest|4|money|ธนาคารปรับขึ้นอัตราดอกเบี้ย|The bank raised interest rates
ภัยพิบัติ|pai1-pi4-bat2|n|disaster|4|nature|ภัยพิบัติทำให้หลายหมู่บ้านเสียหาย|The disaster damaged many villages
สิ่งแวดล้อม|sing2-wɛɛt3-lɔɔm4|n|environment|4|nature|เราควรช่วยกันรักษาสิ่งแวดล้อม|We should help protect the environment
มลพิษ|mon1-la4-pit4|n|pollution|4|nature|มลพิษทางอากาศเป็นปัญหาใหญ่|Air pollution is a big problem
ทรัพยากร|sap4-pa4-yaa1-gɔɔn1|n|resources|4|nature|ทรัพยากรธรรมชาติกำลังลดลง|Natural resources are declining
พลังงาน|pa4-lang1-ngaan1|n|energy|4|nature|พลังงานแสงอาทิตย์ช่วยลดค่าไฟ|Solar energy helps cut electricity costs
วิทยาศาสตร์|wit4-ta4-yaa1-saat2|n|science|4|school|เธอเรียนวิทยาศาสตร์ที่มหาวิทยาลัย|She studies science at university
เทคโนโลยี|tek4-noo1-loo1-yii1|n|technology|4|tech|เทคโนโลยีเปลี่ยนชีวิตของเรามาก|Technology has changed our lives a lot
นวัตกรรม|na4-wat4-dta2-gam1|n|innovation|4|tech|บริษัทนี้ขึ้นชื่อเรื่องนวัตกรรม|This company is known for innovation
การวิจัย|gaan1-wi4-jai1|n|research|4|school|การวิจัยใช้เวลาหลายปี|The research took several years
การทดลอง|gaan1-tot4-lɔɔng1|n|experiment|4|school|การทดลองครั้งนี้ประสบความสำเร็จ|This experiment was a success
ข้อมูล|kɔɔ3-muun1|n|data; information|4|tech|ข้อมูลส่วนตัวต้องได้รับการปกป้อง|Personal data must be protected
ระบบ|ra4-bop2|n|system|4|tech|ระบบคอมพิวเตอร์ขัดข้องตั้งแต่เช้า|The computer system has been down since morning
โครงสร้าง|kroong1-saang3|n|structure|4|abstract|โครงสร้างของบริษัทเปลี่ยนไป|The company's structure has changed
กระบวนการ|gra2-buan1-gaan1|n|process|4|abstract|กระบวนการนี้ซับซ้อนมาก|This process is very complicated
ประสิทธิภาพ|bpra2-sit2-ti4-paap3|n|efficiency|4|work|เครื่องจักรใหม่มีประสิทธิภาพสูง|The new machine is highly efficient
ผลกระทบ|pon5-gra2-top4|n|impact; effect|4|abstract|นโยบายนี้มีผลกระทบต่อคนจำนวนมาก|This policy affects many people
ปัจจัย|bpat2-jai1|n|factor|4|abstract|ราคาเป็นปัจจัยสำคัญในการตัดสินใจ|Price is an important factor in the decision
สาเหตุ|saa5-heet2|n|cause|4|abstract|ตำรวจกำลังสอบสวนสาเหตุของอุบัติเหตุ|Police are investigating the cause of the accident
ข้อเสนอ|kɔɔ3-sa2-nɤɤ5|n|proposal|4|work|ลูกค้าปฏิเสธข้อเสนอของเรา|The client rejected our proposal
ข้อจำกัด|kɔɔ3-jam1-gat2|n|limitation|4|abstract|โครงการนี้มีข้อจำกัดหลายอย่าง|This project has several limitations
ข้อตกลง|kɔɔ3-dtok2-long1|n|agreement|4|work|ทั้งสองฝ่ายลงนามในข้อตกลง|Both sides signed the agreement
สัญญา|san5-yaa1|n|contract; promise|4|work|เขาลงนามในสัญญาจ้างงาน|He signed the employment contract
อุปสรรค|up2-bpa2-sak2|n|obstacle|4|abstract|เราต้องเอาชนะอุปสรรคทุกอย่าง|We must overcome every obstacle
ความสำเร็จ|kwaam1-sam5-ret2|n|success|4|abstract|ความสำเร็จมาจากความพยายาม|Success comes from effort
ความล้มเหลว|kwaam1-lom4-leo5|n|failure|4|abstract|ความล้มเหลวสอนอะไรหลายอย่าง|Failure teaches many things
ความพยายาม|kwaam1-pa4-yaa1-yaam1|n|effort|4|abstract|ความพยายามของเธอน่าชื่นชม|Her effort is admirable
ความรับผิดชอบ|kwaam1-rap4-pit2-chɔɔp3|n|responsibility|4|abstract|ผู้นำต้องมีความรับผิดชอบสูง|A leader must have great responsibility
ความอดทน|kwaam1-ot2-ton1|n|endurance; patience|4|abstract|งานนี้ต้องใช้ความอดทน|This work requires patience
ความเชื่อมั่น|kwaam1-chɯa3-man3|n|confidence; trust|4|feelings|นักลงทุนสูญเสียความเชื่อมั่น|Investors lost confidence
ความสามัคคี|kwaam1-saa5-mak4-kii1|n|unity|4|abstract|ความสามัคคีทำให้ทีมเข้มแข็ง|Unity makes the team strong
ความเสี่ยง|kwaam1-siang2|n|risk|4|abstract|ธุรกิจนี้มีความเสี่ยงสูง|This business has high risk
ปัญหา|bpan1-haa5|n|problem|4|abstract|เราต้องช่วยกันแก้ปัญหา|We must solve the problem together
แนวทาง|nɛɛo1-taang1|n|approach; guideline|4|abstract|ทีมงานเสนอแนวทางใหม่|The team proposed a new approach
มาตรการ|maat3-dtra2-gaan1|n|measure|4|abstract|รัฐบาลออกมาตรการช่วยเหลือประชาชน|The government issued relief measures
มาตรฐาน|maat3-dtra2-taan5|n|standard|4|work|สินค้าต้องได้มาตรฐาน|Goods must meet the standard
เป้าหมาย|bpao3-maai5|n|goal|4|abstract|เป้าหมายของเราคือลดต้นทุน|Our goal is to cut costs
แผนการ|pɛɛn5-gaan1|n|plan|4|abstract|แผนการนี้ต้องได้รับอนุมัติก่อน|This plan needs approval first
เอกสาร|eek2-ga2-saan5|n|document|4|work|กรุณาแนบเอกสารให้ครบถ้วน|Please attach the complete documents
หลักฐาน|lak2-taan5|n|evidence|4|abstract|ศาลต้องการหลักฐานที่ชัดเจน|The court needs clear evidence
ข้อเท็จจริง|kɔɔ3-tet4-jing1|n|fact|4|abstract|เราควรพูดตามข้อเท็จจริง|We should speak according to the facts
การอภิปราย|gaan1-a2-pi4-bpraai1|n|debate; discussion|4|abstract|การอภิปรายในสภาใช้เวลานาน|The debate in parliament took a long time
การประชุม|gaan1-bpra2-chum1|n|meeting; conference|4|work|การประชุมเริ่มเก้าโมงเช้า|The meeting starts at nine in the morning
องค์กร|ong1-gɔɔn1|n|organization|4|work|องค์กรนี้ช่วยเหลือเด็กยากจน|This organization helps poor children
หน่วยงาน|nuai2-ngaan1|n|agency; unit|4|work|หน่วยงานราชการเปิดตั้งแต่แปดโมงครึ่ง|Government offices open from eight thirty
ภาคเอกชน|paak3-eek2-ga2-chon1|n|private sector|4|work|ภาคเอกชนมีบทบาทสำคัญในการพัฒนา|The private sector plays a key role in development
ผู้บริหาร|puu3-bɔɔ1-ri4-haan5|n|executive; administrator|4|work|ผู้บริหารตัดสินใจปรับโครงสร้างบริษัท|The executives decided to restructure the company
ข้าราชการ|kaa3-raat3-cha4-gaan1|n|civil servant|4|work|พ่อของเธอเป็นข้าราชการ|Her father is a civil servant
สวัสดิการ|sa2-wat2-di2-gaan1|n|welfare; benefits|4|work|บริษัทมีสวัสดิการดีสำหรับพนักงาน|The company has good benefits for employees
ค่าจ้าง|kaa3-jaang3|n|wage|4|money|ค่าจ้างขั้นต่ำปรับขึ้นแล้ว|The minimum wage has been raised
เศรษฐี|seet2-tii5|n|rich person; tycoon|4|money|เศรษฐีบริจาคเงินให้โรงเรียน|The tycoon donated money to the school
ผู้ประกอบการ|puu3-bpra2-gɔɔp2-gaan1|n|entrepreneur|4|work|ผู้ประกอบการรุ่นใหม่ใช้เทคโนโลยีมาก|Young entrepreneurs use a lot of technology
ธุรกิจ|tu4-ra4-git2|n|business|4|work|เขาเปิดธุรกิจส่วนตัวเมื่อปีก่อน|He started his own business last year
กำไร|gam1-rai1|n|profit|4|money|บริษัทมีกำไรเพิ่มขึ้น|The company's profit has increased
ขาดทุน|kaat2-tun1|v|to lose money|4|money|ร้านนี้ขาดทุนมาสองปีแล้ว|This shop has lost money for two years
ตลาดหุ้น|dta2-laat2-hun3|n|stock market|4|money|ตลาดหุ้นผันผวนมากวันนี้|The stock market is very volatile today
สถานการณ์|sa2-taa5-na4-gaan1|n|situation|4|abstract|สถานการณ์เริ่มดีขึ้นแล้ว|The situation is starting to improve
สถานะ|sa2-taa5-na4|n|status|4|abstract|สถานะของโครงการยังไม่ชัดเจน|The status of the project is still unclear
สถาบัน|sa2-taa5-ban1|n|institution|4|school|สถาบันการศึกษาต้องพัฒนาหลักสูตร|Educational institutions must develop curricula
สังคม|sang5-kom1|n|society|4|abstract|สังคมผู้สูงอายุกำลังเพิ่มขึ้น|The aging society is growing
วัฒนธรรม|wat4-ta4-na4-tam1|n|culture|4|culture|วัฒนธรรมไทยมีเอกลักษณ์เฉพาะตัว|Thai culture has a unique identity
ประเพณี|bpra2-pee1-nii1|n|tradition|4|culture|ประเพณีสงกรานต์มีมานาน|The Songkran tradition is old
พิธี|pi4-tii1|n|ceremony|4|culture|พิธีเปิดจัดขึ้นที่วัด|The opening ceremony was held at the temple
ศาสนา|saat2-sa2-naa5|n|religion|4|culture|ประเทศไทยมีหลายศาสนา|Thailand has many religions
ศิลปะ|sin5-la4-bpa2|n|art|4|culture|เธอชอบศิลปะแบบดั้งเดิม|She likes traditional art
ปรัชญา|bprat2-yaa1|n|philosophy|4|school|เขาเรียนปรัชญาตะวันออก|He studies Eastern philosophy
คุณธรรม|kun1-na4-tam1|n|virtue; morality|4|abstract|โรงเรียนสอนคุณธรรมให้เด็ก|The school teaches morality to children
ประวัติศาสตร์|bpra2-wat2-dti2-saat2|n|history|4|school|ประวัติศาสตร์ช่วยให้เราเข้าใจอดีต|History helps us understand the past
โบราณ|boo1-raan1|adj|ancient|4|adjs|วัดโบราณแห่งนี้มีอายุหลายร้อยปี|This ancient temple is hundreds of years old
ความกังวล|kwaam1-gang1-won1|n|worry|4|feelings|เขามีความกังวลเรื่องอนาคต|He has worries about the future
ผิดหวัง|pit2-wang5|v|to be disappointed|4|feelings|ฉันผิดหวังกับผลสอบ|I am disappointed with the exam result
ภูมิใจ|puum1-jai1|v|to be proud|4|feelings|พ่อแม่ภูมิใจในตัวเธอ|Her parents are proud of her
ละอายใจ|la4-aai1-jai1|v|to feel ashamed|4|feelings|เขาละอายใจที่โกหก|He felt ashamed for lying
อิจฉา|it2-chaa5|v|to envy|4|feelings|อย่าอิจฉาความสำเร็จของคนอื่น|Do not envy other people's success
เห็นอกเห็นใจ|hen5-ok2-hen5-jai1|v|to sympathize|4|feelings|เราควรเห็นอกเห็นใจผู้ที่ลำบาก|We should sympathize with those in hardship
ท้อแท้|tɔɔ4-tɛɛ4|adj|discouraged|4|feelings|เขาท้อแท้หลังสอบไม่ผ่าน|He was discouraged after failing the exam
สะเทือนใจ|sa2-tɯan1-jai1|adj|heartbreaking; deeply moved|4|feelings|ข่าวนี้น่าสะเทือนใจมาก|This news is very heartbreaking
ประทับใจ|bpra2-tap4-jai1|v|to be impressed|4|feelings|ฉันประทับใจการบริการของโรงแรม|I was impressed by the hotel's service
หงุดหงิด|ngut2-ngit2|adj|irritable; annoyed|4|feelings|เขาหงุดหงิดเพราะรถติด|He was annoyed because of the traffic
เบื่อหน่าย|bɯa2-naai2|adj|fed up; weary|4|feelings|เธอเบื่อหน่ายกับงานประจำ|She is fed up with her routine job
ขุ่นเคือง|kun2-kɯang1|adj|resentful|4|feelings|เขาขุ่นเคืองที่ถูกตำหนิ|He felt resentful about being blamed
โล่งใจ|loong3-jai1|adj|relieved|4|feelings|ฉันโล่งใจที่ทุกอย่างเรียบร้อย|I am relieved that everything is settled
สงสัย|song5-sai5|v|to doubt; suspect|4|feelings|ตำรวจสงสัยว่ามีคนโกหก|The police suspect someone is lying
ยอมรับ|yɔɔm1-rap4|v|to accept; admit|4|verbs|เขายอมรับว่าตนเองผิด|He admitted that he was wrong
ปฏิเสธ|bpa2-dti2-seet2|v|to refuse; deny|4|verbs|เธอปฏิเสธข้อเสนอนั้นอย่างสุภาพ|She politely refused that offer
ปฏิบัติ|bpa2-dti2-bat2|v|to practice; carry out|4|verbs|พนักงานต้องปฏิบัติตามกฎ|Employees must follow the rules
ปฏิรูป|bpa2-dti2-ruup3|v|to reform|4|verbs|รัฐบาลต้องการปฏิรูปการศึกษา|The government wants to reform education
พัฒนา|pat4-ta4-naa1|v|to develop|4|verbs|เราต้องพัฒนาทักษะอยู่เสมอ|We must always develop our skills
สนับสนุน|sa2-nap4-sa2-nun5|v|to support|4|verbs|บริษัทสนับสนุนโครงการนี้|The company supports this project
ส่งเสริม|song2-sɤɤm5|v|to promote; encourage|4|verbs|โรงเรียนส่งเสริมให้เด็กอ่านหนังสือ|The school encourages children to read
ควบคุม|kuap3-kum1|v|to control|4|verbs|เจ้าหน้าที่ควบคุมสถานการณ์ได้แล้ว|Officials have the situation under control
ตรวจสอบ|dtruat2-sɔɔp2|v|to inspect; verify|4|verbs|นักบัญชีตรวจสอบเอกสารทุกฉบับ|The accountant verifies every document
เผชิญ|pa2-chɤɤn1|v|to face; confront|4|verbs|ประเทศนี้เผชิญวิกฤตเศรษฐกิจ|This country faces an economic crisis
ดำเนินการ|dam1-nɤɤn1-gaan1|v|to proceed; take action|4|verbs|เราจะดำเนินการทันที|We will take action immediately
อ้างอิง|aang3-ing1|v|to cite; refer to|4|verbs|รายงานอ้างอิงข้อมูลจากหลายแหล่ง|The report cites data from many sources
ยืนยัน|yɯɯn1-yan1|v|to confirm|4|verbs|กรุณายืนยันการจองอีกครั้ง|Please confirm the booking again
คาดการณ์|kaat3-gaan1|v|to forecast|4|verbs|นักวิเคราะห์คาดการณ์ว่าราคาจะลดลง|Analysts forecast that prices will fall
ประเมิน|bpra2-mɤɤn1|v|to evaluate|4|verbs|ครูประเมินผลงานของนักเรียน|The teacher evaluates the students' work
วิเคราะห์|wi4-kro4|v|to analyze|4|verbs|เราต้องวิเคราะห์ข้อมูลก่อนตัดสินใจ|We must analyze the data before deciding
สังเกต|sang5-geet2|v|to observe; notice|4|verbs|นักวิทยาศาสตร์สังเกตการเปลี่ยนแปลง|The scientist observes the changes
เปรียบเทียบ|bpriap2-tiap3|v|to compare|4|verbs|ลองเปรียบเทียบราคาก่อนซื้อ|Try comparing prices before buying
อธิบาย|a2-ti4-baai1|v|to explain|4|verbs|ครูอธิบายบทเรียนอย่างละเอียด|The teacher explained the lesson in detail
สรุป|sa2-rup2|v|to summarize; conclude|4|verbs|ช่วยสรุปเนื้อหาให้หน่อยได้ไหมครับ|Could you please summarize the content
เพิ่มขึ้น|pɤɤm3-kɯn3|v|to increase|4|verbs|จำนวนนักท่องเที่ยวเพิ่มขึ้นมาก|The number of tourists has risen a lot
ขยายตัว|ka2-yaai5-dtua1|v|to expand|4|verbs|เศรษฐกิจขยายตัวอย่างต่อเนื่อง|The economy keeps expanding
ชะลอ|cha4-lɔɔ1|v|to slow down; delay|4|verbs|บริษัทชะลอการจ้างงาน|The company slowed down hiring
ฟื้นฟู|fɯɯn4-fuu1|v|to restore; revive|4|verbs|รัฐบาลฟื้นฟูพื้นที่ที่ถูกน้ำท่วม|The government restored the flooded areas
อนุรักษ์|a2-nu4-rak4|v|to conserve|4|verbs|เราควรอนุรักษ์ป่าไม้|We should conserve the forests
ป้องกัน|bpɔɔng3-gan1|v|to prevent; protect|4|verbs|วัคซีนช่วยป้องกันโรคได้|Vaccines help prevent disease
แก้ไข|gɛɛ3-kai5|v|to correct; fix|4|verbs|ฉันขอแก้ไขข้อผิดพลาดนี้|I would like to correct this mistake
ต่อต้าน|dtɔɔ2-dtaan3|v|to oppose; resist|4|verbs|ประชาชนต่อต้านการทุจริต|The people oppose corruption
ละเมิด|la4-mɤɤt3|v|to violate|4|verbs|บริษัทละเมิดสิทธิของพนักงาน|The company violated its employees' rights
ลงโทษ|long1-toot3|v|to punish|4|verbs|ศาลลงโทษผู้กระทำผิด|The court punished the offender
เรียกร้อง|riak3-rɔɔng4|v|to demand|4|verbs|คนงานเรียกร้องค่าจ้างที่เป็นธรรม|The workers demanded fair wages
ยกเลิก|yok4-lɤɤk3|v|to cancel|4|verbs|สายการบินยกเลิกเที่ยวบินเมื่อเช้า|The airline cancelled the flight this morning
อนุมัติ|a2-nu4-mat4|v|to approve|4|verbs|ผู้จัดการอนุมัติงบประมาณแล้ว|The manager has approved the budget
แต่งตั้ง|dtɛɛng2-dtang3|v|to appoint|4|verbs|บริษัทแต่งตั้งประธานคนใหม่|The company appointed a new chairman
ลาออก|laa1-ɔɔk2|v|to resign|4|work|เขาลาออกจากงานเมื่อวานนี้|He resigned from his job yesterday
ร้องเรียน|rɔɔng4-rian1|v|to file a complaint|4|verbs|ลูกค้าร้องเรียนเรื่องคุณภาพสินค้า|The customer complained about product quality
ลงนาม|long1-naam1|v|to sign formally|4|verbs|ผู้แทนลงนามในสัญญาแล้ว|The representative has signed the contract
ประนีประนอม|bpra2-nii1-bpra2-nɔɔm1|v|to compromise|4|verbs|ทั้งสองฝ่ายยอมประนีประนอมกัน|Both sides agreed to compromise
เสียสละ|sia5-sa2-la2|v|to sacrifice|4|verbs|แม่เสียสละเพื่อลูกเสมอ|Mothers always sacrifice for their children
เอาเปรียบ|ao1-bpriap2|v|to take advantage of|4|verbs|อย่าเอาเปรียบผู้อื่น|Do not take advantage of others
เฉียบแหลม|chiap2-lɛɛm5|adj|sharp; astute|4|adjs|นักข่าวคนนี้มีความคิดเฉียบแหลม|This journalist has sharp thinking
โปร่งใส|bproong2-sai5|adj|transparent|4|adjs|การทำงานต้องโปร่งใส|The work must be transparent
ยั่งยืน|yang3-yɯɯn1|adj|sustainable; lasting|4|adjs|เราต้องการการพัฒนาที่ยั่งยืน|We want sustainable development
เป็นกลาง|bpen1-glaang1|adj|neutral|4|adjs|สื่อควรรายงานข่าวอย่างเป็นกลาง|The media should report neutrally
ซับซ้อน|sap4-sɔɔn4|adj|complicated|4|adjs|กฎหมายฉบับนี้ซับซ้อนมาก|This law is very complicated
รอบคอบ|rɔɔp3-kɔɔp3|adj|careful; prudent|4|adjs|เขาเป็นคนรอบคอบในการตัดสินใจ|He is prudent in making decisions
เข้มงวด|kem3-nguat3|adj|strict|4|adjs|โรงเรียนมีกฎระเบียบเข้มงวด|The school has strict rules
เหมาะสม|mɔ2-som5|adj|suitable; appropriate|4|adjs|เธอเป็นคนที่เหมาะสมกับตำแหน่งนี้|She is suitable for this position
จำเป็น|jam1-bpen1|adj|necessary|4|adjs|เอกสารนี้จำเป็นต้องใช้|This document is necessary
เพียงพอ|piang1-pɔɔ1|adj|sufficient|4|adjs|งบประมาณนี้เพียงพอแล้ว|This budget is sufficient
ชัดเจน|chat4-jeen1|adj|clear; obvious|4|adjs|คำอธิบายของเขาชัดเจนมาก|His explanation is very clear
ละเอียด|la4-iat2|adj|detailed; thorough|4|adjs|รายงานฉบับนี้ละเอียดมาก|This report is very detailed
ล้าสมัย|laa4-sa2-mai5|adj|outdated|4|adjs|ระบบเก่านี้ล้าสมัยแล้ว|This old system is outdated
ทันสมัย|tan1-sa2-mai5|adj|modern; up to date|4|adjs|โรงพยาบาลมีอุปกรณ์ทันสมัย|The hospital has modern equipment
นามธรรม|naam1-ma4-tam1|adj|abstract|4|adjs|ความรักเป็นเรื่องนามธรรม|Love is an abstract matter
แนวคิด|nɛɛo1-kit4|n|concept; idea|4|abstract|แนวคิดนี้น่าสนใจมาก|This concept is very interesting
มุมมอง|mum1-mɔɔng1|n|perspective|4|abstract|แต่ละคนมีมุมมองต่างกัน|Each person has a different perspective
ค่านิยม|kaa3-ni4-yom1|n|values; social norm|4|culture|ค่านิยมของคนรุ่นใหม่เปลี่ยนไป|The values of the younger generation have changed
อิทธิพล|it2-ti4-pon1|n|influence|4|abstract|สื่อสังคมมีอิทธิพลต่อความคิดเห็น|Social media influences opinion
อำนาจ|am1-naat3|n|power; authority|4|abstract|อำนาจต้องใช้อย่างมีความรับผิดชอบ|Power must be used responsibly
ผลประโยชน์|pon5-bpra2-yoot3|n|benefit; interest|4|abstract|เขาคำนึงถึงผลประโยชน์ส่วนรวม|He considers the common interest
สัดส่วน|sat2-suan2|n|proportion|4|abstract|สัดส่วนผู้หญิงในองค์กรเพิ่มขึ้น|The proportion of women in the organization has risen
อัตรา|at2-dtraa1|n|rate|4|money|อัตราการว่างงานลดลง|The unemployment rate has fallen
ผู้นำ|puu3-nam1|n|leader|4|work|ผู้นำประเทศกล่าวสุนทรพจน์|The national leader gave a speech
ประชาชน|bpra2-chaa1-chon1|n|the public; citizens|4|abstract|ประชาชนมีส่วนร่วมในการเลือกตั้ง|The public takes part in the election
ชนกลุ่มน้อย|chon1-glum2-nɔɔi4|n|minority group|4|culture|ชนกลุ่มน้อยมีภาษาของตนเอง|Minority groups have their own languages
โรคระบาด|rook3-ra4-baat2|n|epidemic|4|health|โรคระบาดส่งผลกระทบต่อเศรษฐกิจ|The epidemic affected the economy
ภูมิคุ้มกัน|puum1-kum4-gan1|n|immunity|4|health|วัคซีนสร้างภูมิคุ้มกัน|Vaccines build immunity
เรื้อรัง|rɯa4-rang1|adj|chronic|4|health|ปู่เป็นโรคเรื้อรังหลายโรค|Grandfather has several chronic illnesses
ติดเชื้อ|dtit2-chɯa4|v|to become infected|4|health|แผลอาจติดเชื้อได้|A wound can become infected
ความเครียด|kwaam1-kriat3|n|stress|4|health|ความเครียดส่งผลต่อสุขภาพ|Stress affects health
ระบบนิเวศ|ra4-bop2-ni4-weet3|n|ecosystem|4|nature|ป่าชายเลนเป็นระบบนิเวศสำคัญ|Mangrove forests are an important ecosystem
ภูมิประเทศ|puum1-bpra2-teet3|n|terrain|4|nature|ภูมิประเทศทางเหนือเป็นภูเขา|The terrain in the north is mountainous
ภูเขาไฟ|puu1-kao5-fai1|n|volcano|4|nature|ภูเขาไฟลูกนี้ยังไม่ดับ|This volcano is still active
แผ่นดินไหว|pɛɛn2-din1-wai5|n|earthquake|4|nature|เกิดแผ่นดินไหวเมื่อคืนนี้|An earthquake occurred last night
น้ำท่วม|naam4-tuam3|n|flood|4|nature|น้ำท่วมทำให้การเดินทางลำบาก|The flood made travel difficult
ภัยแล้ง|pai1-lɛɛng4|n|drought|4|nature|ภัยแล้งทำให้พืชผลเสียหาย|The drought damaged crops
ความสามารถ|kwaam1-saa5-maat3|n|ability|3|work|เธอมีความสามารถมาก|She has great ability
นอนไม่หลับ|nɔɔn1-mai3-lap2|v|to be unable to sleep|3|health|เมื่อคืนฉันนอนไม่หลับ|I could not sleep last night
ประหลาดใจ|bpra2-laat2-jai1|adj|surprised|3|feelings|ฉันประหลาดใจมากที่เห็นเขา|I was very surprised to see him
บัตรเครดิต|bat2-kree1-dit2|n|credit card|3|money|ร้านนี้รับบัตรเครดิตไหม|Does this shop take credit cards?
สอบผ่าน|sɔɔp2-paan2|v|to pass an exam|3|school|ฉันสอบผ่านแล้ว|I passed the exam
สอบตก|sɔɔp2-dtok2|v|to fail an exam|3|school||
บทเรียน|bot2-rian1|n|lesson|3|school|บทเรียนนี้ไม่ยาก|This lesson is not difficult
หัวข้อ|hua5-kɔɔ3|n|topic|3|school|หัวข้อวันนี้คืออะไร|What is today's topic?
ดาวน์โหลด|daao1-loot2|v|to download|3|tech|ฉันดาวน์โหลดแอปแล้ว|I have downloaded the app
อัปโหลด|ap2-loot2|v|to upload|3|tech||
ติดตั้ง|dtit2-dtang3|v|to install|3|tech|ช่วยติดตั้งโปรแกรมนี้หน่อย|Please install this program
โปรแกรม|bproo1-grɛɛm1|n|program|3|tech||
แอปพลิเคชัน|ɛɛp2-pli4-kee1-chan1|n|application|3|tech||
แบตเตอรี่|bɛɛt2-dtɤɤ1-rii3|n|battery|3|tech|แบตเตอรี่ใกล้หมดแล้ว|The battery is almost dead
หน้าจอ|naa3-jɔɔ1|n|screen|3|tech|หน้าจอแตก|The screen is cracked
คีย์บอร์ด|kii1-bɔɔt2|n|keyboard|3|tech||
นิตยสาร|nit4-dta2-ya4-saan5|n|magazine|3|culture||
โฆษณา|koot3-sa2-naa1|n|advertisement|3|culture||
รายการ|raai1-gaan1|n|programme; list|3|culture|รายการนี้สนุกมาก|This programme is very fun
ทะเลสาบ|ta4-lee1-saap2|n|lake|3|nature||
สัตว์เลี้ยง|sat2-liang4|n|pet|3|animals|ฉันมีสัตว์เลี้ยงสองตัว|I have two pets
สิงโต|sing5-dtoo1|n|lion|3|animals||
สถานทูต|sa2-taan5-tuut3|n|embassy|3|travel||
ทางแยก|taang1-yɛɛk3|n|junction|3|city||
ทางด่วน|taang1-duan2|n|expressway|3|transport||
ที่จอดรถ|tii3-jɔɔt2-rot4|n|parking|3|transport|ที่จอดรถเต็มแล้ว|The parking is full
ปีนเขา|bpiin1-kao5|v|to climb mountains|3|hobby||
เฟอร์นิเจอร์|fɤɤ1-ni4-jɤɤ1|n|furniture|3|home||
เครื่องซักผ้า|krɯang3-sak4-paa3|n|washing machine|3|home||
เครื่องปรับอากาศ|krɯang3-bprap2-aa1-gaat2|n|air conditioner|3|home||
ทำความสะอาด|tam1-kwaam1-sa2-aat2|v|to clean|3|home|เราทำความสะอาดบ้านวันเสาร์|We clean the house on Saturday
ใจร้อน|jai1-rɔɔn4|adj|impatient|3|adjs||
เข้าใจผิด|kao3-jai1-pit2|v|to misunderstand|3|verbs|ขอโทษ ฉันเข้าใจผิด|Sorry, I misunderstood
แบ่ง|bɛɛng2|v|to divide; to share|3|verbs|เราแบ่งขนมกัน|We share the snacks
รัฐธรรมนูญ|rat4-ta2-tam1-ma2-nuun1|n|constitution|4|abstract||
ผู้พิพากษา|puu3-pi4-paak3-saa5|n|judge|4|work||
ความยากจน|kwaam1-yaak3-jon1|n|poverty|4|abstract||
การศึกษา|gaan1-sɯk2-saa5|n|education|4|school|การศึกษาสำคัญมาก|Education is very important
ปัญญาประดิษฐ์|bpan1-yaa1-bpra2-dit2|n|artificial intelligence|4|tech||
การค้า|gaan1-kaa4|n|trade|4|money||
หุ้น|hun3|n|share; stock|4|money||
บริการ|bɔɔ1-ri4-gaan1|n|service|4|shop|บริการที่นี่ดีมาก|The service here is very good
คุณภาพ|kun1-na4-paap3|n|quality|4|shop||
การเกษตร|gaan1-ga2-seet2|n|agriculture|4|nature||
ภาวะโลกร้อน|paa1-wa4-look3-rɔɔn4|n|global warming|4|nature||
ความยั่งยืน|kwaam1-yang3-yɯɯn1|n|sustainability|4|nature||
ความขัดแย้ง|kwaam1-kat2-yɛɛng4|n|conflict|4|abstract||
สงคราม|song5-kraam1|n|war|4|abstract||
สันติภาพ|san5-dti2-paap3|n|peace|4|abstract||
ความร่วมมือ|kwaam1-ruam3-mɯɯ1|n|cooperation|4|work|ขอบคุณสำหรับความร่วมมือ|Thank you for your cooperation
แนวโน้ม|nɛɛo1-noom4|n|trend|4|abstract||
สถิติ|sa2-ti2-dti2|n|statistics|4|abstract||
ทฤษฎี|trit4-sa2-dii1|n|theory|4|school||
หลักการ|lak2-gaan1|n|principle|4|abstract||
จุดประสงค์|jut2-bpra2-song5|n|purpose|4|abstract||
ความท้าทาย|kwaam1-taa4-taai1|n|challenge|4|abstract||
ความหวัง|kwaam1-wang5|n|hope|4|feelings|ฉันยังมีความหวัง|I still have hope
ศีลธรรม|siin5-la2-tam1|n|morality|4|abstract||
จริยธรรม|ja2-ri4-ya4-tam1|n|ethics|4|abstract||
จิตใจ|jit2-jai1|n|mind; spirit|4|feelings||
อารมณ์|aa1-rom1|n|mood; emotion|4|feelings|วันนี้อารมณ์ดี|I am in a good mood today
บุคลิกภาพ|buk2-ka2-lik4-ga2-paap3|n|personality|4|people||
พฤติกรรม|pɯt4-dti2-gam1|n|behaviour|4|people||
นิสัย|ni4-sai5|n|habit; character|4|people|เขามีนิสัยดี|He has a good character
ความเชื่อ|kwaam1-chɯa3|n|belief|4|culture||
ความไว้วางใจ|kwaam1-wai4-waang1-jai1|n|trust|4|feelings||
ความเคารพ|kwaam1-kao1-rop4|n|respect|4|feelings||
ความเห็นอกเห็นใจ|kwaam1-hen5-ok2-hen5-jai1|n|empathy|4|feelings||
โต้แย้ง|dtoo3-yɛɛng4|v|to argue against|4|verbs||
วิพากษ์วิจารณ์|wi4-paak3-wi4-jaan1|v|to criticize|4|verbs||
ยกย่อง|yok4-yɔɔng3|v|to praise|4|verbs||
ตำหนิ|dtam1-ni2|v|to blame|4|verbs||
บรรลุ|ban1-lu4|v|to achieve|4|verbs||
บริหาร|bɔɔ1-ri4-haan5|v|to manage|4|verbs||
กำหนด|gam1-not2|v|to set; to determine|4|verbs|เรากำหนดวันประชุมแล้ว|We have set the meeting date
รับรอง|rap4-rɔɔng1|v|to guarantee|4|verbs||
ชดเชย|chot4-chɤɤi1|v|to compensate|4|verbs||
ประท้วง|bpra2-tuang4|v|to protest|4|verbs||
ลงคะแนน|long1-ka4-nɛɛn1|v|to vote|4|verbs||
รณรงค์|ron1-na4-rong1|v|to campaign|4|verbs||
บังคับ|bang1-kap4|v|to force|4|verbs||
สร้างสรรค์|saang3-san5|adj|creative; constructive|4|adjs||
ประดิษฐ์|bpra2-dit2|v|to invent|4|verbs||
เผยแพร่|pɤɤi5-prɛɛ3|v|to publish; to spread|4|verbs||
สื่อสาร|sɯɯ2-saan5|v|to communicate|4|verbs|เราสื่อสารกันได้ดี|We communicate well
ปรึกษา|bprɯk2-saa5|v|to consult|4|verbs|ฉันอยากปรึกษาหมอ|I want to consult a doctor
ครอบคลุม|krɔɔp3-klum1|adj|comprehensive|4|adjs||
หลากหลาย|laak2-laai5|adj|diverse|4|adjs|อาหารไทยหลากหลายมาก|Thai food is very diverse
ผ่อนคลาย|pɔɔn2-klaai1|adj|relaxed|4|adjs||
ลังเล|lang1-lee1|adj|hesitant|4|feelings||
ถ่อมตัว|tɔɔm2-dtua1|adj|modest|4|adjs||
หยิ่ง|ying2|adj|arrogant|4|adjs||
เห็นแก่ตัว|hen5-gɛɛ2-dtua1|adj|selfish|4|adjs||
อย่างไรก็ตาม|yaang2-rai1-gɔɔ3-dtaam1|conj|however|4|abstract|อย่างไรก็ตาม ฉันยังไปได้|However, I can still go
เนื่องจาก|nɯang3-jaak2|conj|because of|4|abstract||
ถึงแม้ว่า|tɯng5-mɛɛ4-waa3|conj|although|4|abstract||
นอกจากนี้|nɔɔk3-jaak2-nii4|conj|besides this|4|abstract||
โดยเฉพาะ|dooi1-cha2-pɔ2|adv|especially|4|abstract|ฉันชอบผลไม้ โดยเฉพาะมะม่วง|I like fruit, especially mango
โดยทั่วไป|dooi1-tua3-bpai1|adv|generally|4|abstract||
ในที่สุด|nai1-tii3-sut2|adv|finally; in the end|4|abstract|ในที่สุดเราก็ถึงแล้ว|We have finally arrived
อย่างน้อย|yaang2-nɔɔi4|adv|at least|4|abstract|อย่างน้อยก็ปลอดภัย|At least it is safe
โดยตรง|dooi1-dtrong1|adv|directly|4|abstract||
ค่อยเป็นค่อยไป|kɔɔi3-bpen1-kɔɔi3-bpai1|adv|gradually|4|abstract||
ต้มยำกุ้ง|dtom3-yam1-gung3|n|tom yum shrimp soup|2|food|ฉันชอบต้มยำกุ้งมาก|I really like tom yum goong
ส้มตำ|som3-dtam1|n|papaya salad|2|food|ส้มตำจานนี้เผ็ดมาก|This papaya salad is very spicy
ผัดไทย|pat2-tai1|n|pad thai|2|food|ผัดไทยร้านนี้อร่อย|The pad thai at this shop is delicious
แกงเขียวหวาน|gɛɛng1-kiao5-waan5|n|green curry|2|food||
แกงมัสมั่น|gɛɛng1-mat4-sa2-man2|n|massaman curry|3|food||
ข้าวผัด|kaao3-pat2|n|fried rice|1|food|ขอข้าวผัดหนึ่งจาน|One fried rice, please
ข้าวมันไก่|kaao3-man1-gai2|n|chicken rice|2|food||
ข้าวเหนียว|kaao3-niao5|n|sticky rice|2|food|ข้าวเหนียวกินกับหมูปิ้ง|Sticky rice goes with grilled pork
มะม่วงข้าวเหนียว|ma4-muang3-kaao3-niao5|n|mango sticky rice|2|food||
ไข่เจียว|kai2-jiao1|n|omelette|2|food||
ลาบ|laap3|n|minced meat salad (larb)|3|food||
น้ำพริก|nam4-prik4|n|chili dip|3|food||
ปลาทอด|bplaa1-tɔɔt3|n|fried fish|2|food||
หมูกรอบ|muu5-grɔɔp2|n|crispy pork|2|food||
ไก่ย่าง|gai2-yaang3|n|grilled chicken|2|food|ไก่ย่างกินกับส้มตำ|Grilled chicken goes with papaya salad
น้ำปลา|nam4-bplaa1|n|fish sauce|2|food|ใส่น้ำปลานิดหน่อย|Add a little fish sauce
ขิง|king5|n|ginger|2|food||
ตะไคร้|dta2-krai4|n|lemongrass|3|food||
ไอศกรีม|ai1-sa2-griim1|n|ice cream|1|food|เด็กๆ ชอบไอศกรีม|Kids like ice cream
ช็อกโกแลต|chɔk4-goo1-lɛɛt3|n|chocolate|2|food||
ขนมหวาน|ka2-nom5-waan5|n|dessert|2|food||
ชานม|chaa1-nom5|n|milk tea|2|drink|ขอชานมเย็นแก้วหนึ่ง|One iced milk tea, please
ไวน์|wai1|n|wine|2|drink||
แครอท|kɛɛ1-rɔɔt3|n|carrot|2|fruitveg||
กะหล่ำปลี|ga2-lam2-bplii1|n|cabbage|3|fruitveg||
เห็ด|het2|n|mushroom|2|fruitveg||
เงาะ|ngɔ4|n|rambutan|2|fruitveg||
มังคุด|mang1-kut4|n|mangosteen|2|fruitveg||
ลำไย|lam1-yai1|n|longan|3|fruitveg||
ส้มโอ|som3-oo1|n|pomelo|3|fruitveg||
สตรอว์เบอร์รี|sa2-dtrɔɔ1-bɤɤ1-rii1|n|strawberry|3|fruitveg||
มะพร้าว|ma4-praao4|n|coconut|2|fruitveg|น้ำมะพร้าวหวานมาก|Coconut water is very sweet
ลูกชิ้น|luuk3-chin4|n|meatball|2|food||
หมูปิ้ง|muu5-bping3|n|grilled pork skewer|2|food||
ไส้กรอก|sai3-grɔɔk2|n|sausage|2|food||
แฮม|hɛɛm1|n|ham|3|food||
ปลาหมึก|bplaa1-mɯk2|n|squid|2|animals||
หอย|hɔɔi5|n|shellfish|2|animals||
ปลาทู|bplaa1-tuu1|n|mackerel|3|animals||
จิ้งจก|jing3-jok2|n|house lizard|3|animals||
ผีเสื้อ|pii5-sɯa3|n|butterfly|2|animals||
เต่า|dtao2|n|turtle|2|animals||
กบ|gop2|n|frog|2|animals||
หมี|mii5|n|bear|2|animals||
กระต่าย|gra2-dtaai2|n|rabbit|2|animals||
แพะ|pɛ4|n|goat|3|animals||
แกะ|gɛ2|n|sheep|3|animals||
ห่าน|haan2|n|goose|3|animals||
ฟ้าแลบ|faa4-lɛɛp3|n|lightning|3|weather||
ลมแรง|lom1-rɛɛng1|n|strong wind|2|weather||
ฤดูร้อน|rɯ4-duu1-rɔɔn4|n|summer; hot season|2|weather||
ฤดูหนาว|rɯ4-duu1-naao5|n|cold season|2|weather||
ฤดูฝน|rɯ4-duu1-fon5|n|rainy season|2|weather||
ปอด|bpɔɔt2|n|lung|3|body||
กระเพาะ|gra2-pɔ4|n|stomach|3|body||
ตับ|dtap2|n|liver|3|body||
กระดูก|gra2-duuk2|n|bone|2|body|เขาเจ็บกระดูก|His bone hurts
กล้ามเนื้อ|glaam3-nɯa4|n|muscle|3|body||
ผิว|piu5|n|skin|2|body||
คิ้ว|kiu4|n|eyebrow|2|body||
ขนตา|kon5-dtaa1|n|eyelash|3|body||
ริมฝีปาก|rim1-fii5-bpaak2|n|lips|3|body||
ลิ้น|lin4|n|tongue|2|body||
คอ|kɔɔ1|n|neck; throat|1|body||
ไหล่|lai2|n|shoulder|2|body||
ข้อศอก|kɔɔ3-sɔɔk2|n|elbow|3|body||
นิ้ว|niu4|n|finger|1|body||
เล็บ|lep4|n|nail|2|body||
เข่า|kao2|n|knee|2|body||
ข้อเท้า|kɔɔ3-tao4|n|ankle|3|body||
ส้นเท้า|son3-tao4|n|heel|3|body||
เอว|eo1|n|waist|2|body||
หน้าผาก|naa3-paak2|n|forehead|2|body||
แก้ม|gɛɛm3|n|cheek|2|body||
เหงือก|ngɯak2|n|gums|3|body||
เลือด|lɯat3|n|blood|2|body|เขามีเลือดออก|He is bleeding
เหงื่อ|ngɯa2|n|sweat|2|body||
น้ำตา|nam4-dtaa1|n|tear|2|body||
แผล|plɛɛ5|n|wound|2|health||
จาม|jaam1|v|to sneeze|2|health||
เจ็บคอ|jep2-kɔɔ1|v|to have a sore throat|2|health||
ปวดหัว|bpuat2-hua5|v|to have a headache|1|health||
ปวดท้อง|bpuat2-tɔɔng4|v|to have a stomachache|1|health||
คลื่นไส้|klɯɯn3-sai3|v|to feel nauseous|3|health||
เวียนหัว|wian1-hua5|v|to feel dizzy|3|health||
ยาแก้ปวด|yaa1-gɛɛ3-bpuat2|n|painkiller|3|health||
เข็ม|kem5|n|needle|2|health||
ใบสั่งยา|bai1-sang2-yaa1|n|prescription|3|health||
หมอฟัน|mɔɔ5-fan1|n|dentist|2|health||
เภสัชกร|pee1-sat2-cha2-gɔɔn1|n|pharmacist|3|work||
ห้องฉุกเฉิน|hɔɔng3-chuk2-chɤɤn5|n|emergency room|3|health||
รถพยาบาล|rot4-pa4-yaa1-baan1|n|ambulance|2|health||
สถาปนิก|sa2-taa5-bpa2-nik4|n|architect|3|work||
นักบัญชี|nak4-ban1-chii1|n|accountant|3|work||
ช่างตัดผม|chaang3-dtat2-pom5|n|barber|3|work||
ช่างไฟ|chaang3-fai1|n|electrician|3|work||
คนขับรถ|kon1-kap2-rot4|n|driver|2|work||
พ่อครัว|pɔɔ3-krua1|n|cook; chef|2|work||
ชาวประมง|chaao1-bpra2-mong1|n|fisherman|3|work||
นักบิน|nak4-bin1|n|pilot|2|work||
แอร์โฮสเตส|ɛɛ1-hoot2-dteet2|n|flight attendant|3|work||
จิตรกร|jit2-dta2-gɔɔn1|n|painter|3|work||
ช่างภาพ|chaang3-paap3|n|photographer|2|work||
นักวิทยาศาสตร์|nak4-wit4-ta4-yaa1-saat2|n|scientist|3|work||
เลขานุการ|lee1-kaa5-nu4-gaan1|n|secretary|4|work||
ผู้ช่วย|puu3-chuai3|n|assistant|3|work||
ลูกจ้าง|luuk3-jaang3|n|employee|3|work||
นายจ้าง|naai1-jaang3|n|employer|3|work||
ว่างงาน|waang3-ngaan1|v|to be unemployed|3|work||
เกษียณ|ga2-sian5|v|to retire|4|work||
บาสเกตบอล|baat2-sa2-get2-bɔɔn1|n|basketball|2|hobby||
วอลเลย์บอล|wɔɔn1-lee1-bɔɔn1|n|volleyball|3|hobby||
แบดมินตัน|bɛɛt2-min1-dtan1|n|badminton|2|hobby||
มวยไทย|muai1-tai1|n|Thai boxing|2|hobby|มวยไทยมีชื่อเสียงมาก|Muay Thai is very famous
เดินป่า|dɤɤn1-bpaa2|v|to hike|3|hobby||
โยคะ|yoo1-ka4|n|yoga|2|hobby||
ฟิตเนส|fit4-neet3|n|gym|3|hobby||
เต้น|dteen3|v|to dance|1|hobby||
เล่นกีตาร์|leen3-gii1-dtaa1|v|to play guitar|2|hobby||
ทำขนม|tam1-ka2-nom5|v|to bake|2|hobby||
เย็บผ้า|yep4-paa3|v|to sew|3|hobby||
ปลูกผัก|bpluuk2-pak2|v|to grow vegetables|3|hobby||
เลี้ยงแมว|liang4-mɛɛo1|v|to keep a cat|2|hobby||
ตลาดนัด|dta2-laat2-nat4|n|weekend market|2|city||
ตลาดน้ำ|dta2-laat2-nam4|n|floating market|2|city||
สวนสาธารณะ|suan5-saa5-taa1-ra4-na4|n|public park|2|city||
โบสถ์|boot2|n|church|3|city||
มัสยิด|mat4-sa2-yit4|n|mosque|3|city||
สถานีรถไฟ|sa2-taa5-nii1-rot4-fai1|n|train station|2|transport||
สถานีขนส่ง|sa2-taa5-nii1-kon5-song2|n|bus terminal|3|transport||
ท่าเรือ|taa3-rɯa1|n|pier|3|transport||
ป้ายรถเมล์|bpaai3-rot4-mee1|n|bus stop|2|transport||
ตรอก|dtrɔɔk2|n|alley|3|city||
ถนนใหญ่|ta2-non5-yai2|n|main road|2|city||
ตู้เอทีเอ็ม|dtuu3-ee1-tii1-em1|n|ATM|2|money||
ร้านยา|raan4-yaa1|n|pharmacy|2|shop||
ร้านขายของชำ|raan4-kaai5-kɔɔng5-cham1|n|grocery store|3|shop||
ร้านตัดผม|raan4-dtat2-pom5|n|hair salon|2|shop||
ร้านซักรีด|raan4-sak4-riit3|n|laundry shop|3|shop||
ร้านหนังสือ|raan4-nang5-sɯɯ5|n|bookstore|1|shop||
สถานีตำรวจ|sa2-taa5-nii1-dtam1-ruat3|n|police station|2|city||
กระดานดำ|gra2-daan1-dam1|n|blackboard|2|school||
ยางลบ|yaang1-lop4|n|eraser|2|school||
ไม้บรรทัด|maai4-ban1-tat4|n|ruler|3|school||
กรรไกร|gan1-grai1|n|scissors|2|school||
กาว|gaao1|n|glue|3|school||
กระเป๋านักเรียน|gra2-bpao5-nak4-rian1|n|school bag|2|school||
พจนานุกรม|pot4-ja2-naa1-nu2-grom1|n|dictionary|3|school||
สำเนียง|sam5-niang1|n|accent|3|school||
ภาษาอังกฤษ|paa1-saa5-ang1-grit2|n|English language|1|school||
ภาษาจีน|paa1-saa5-jiin1|n|Chinese language|1|school||
ภาษาญี่ปุ่น|paa1-saa5-yii3-bpun2|n|Japanese language|1|school||
ภาษาเกาหลี|paa1-saa5-gao1-lii5|n|Korean language|1|school||
ภาษาพม่า|paa1-saa5-pa4-maa3|n|Burmese language|2|school||
คณิตศาสตร์|ka4-nit4-dta2-saat2|n|mathematics|2|school||
เคมี|kee1-mii1|n|chemistry|3|school||
ฟิสิกส์|fi4-sik2|n|physics|3|school||
ชีววิทยา|chii1-wa4-wit4-ta4-yaa1|n|biology|3|school||
ภูมิศาสตร์|puu1-mi4-saat2|n|geography|3|school||
เกรด|greet2|n|grade|2|school||
ปริญญาโท|bpa2-rin1-yaa1-too1|n|master's degree|4|school||
ปริญญาเอก|bpa2-rin1-yaa1-eek2|n|doctorate|4|school||`;
const RAW_FUNC = `@particles|Particles|คำลงท้าย|Ending particles|pen|Short words at the end of a sentence that carry politeness, mood and attitude. They have no dictionary meaning, yet without them speech sounds blunt or unnatural.|Men end polite sentences with ครับ and women with ค่ะ (statements) or คะ (questions).;;Particles are unstressed and short: they carry the speaker's tone, softening or emphasis.;;Stack particles for nuance: ก็ได้นะครับ, ไปแล้วนะคะ.;;Dropping the particle is fine with close friends, but rude with strangers or elders.
#Politeness
ครับ|krap4|polite particle (male speaker)|1|ขอบคุณครับ|Thank you
ค่ะ|kaa3|polite particle (female speaker, statements)|1|สวัสดีค่ะ|Hello
คะ|ka4|polite particle (female speaker, questions)|1|ไปไหนคะ|Where are you going?
ขา|kaa5|friendly polite particle (female, calling or intimate)|2|แม่ขา มาหน่อยค่ะ|Mom, please come here
จ๊ะ|ja4|friendly soft particle|2|ไปไหนมาจ๊ะ|Where have you been?
จ้ะ|ja3|friendly answer or softener|2|ได้จ้ะ|Sure
จ้า|jaa3|warm, drawn-out particle|2|ขอบคุณจ้า|Thanks
ฮะ|ha4|casual polite particle (children, men)|3|ครับ ผมไม่รู้ฮะ|I don't know
#Questions
ไหม|mai5|yes/no question particle|1|คุณหิวไหม|Are you hungry?
หรือ|rɯɯ5|or; question particle expecting yes|1|คุณไม่ไปหรือ|You are not going?
เหรอ|rɤɤ5|really? (colloquial question)|1|จริงเหรอ|Really?
หรือเปล่า|rɯɯ5 bplaao2|or not (question tag)|2|คุณสบายดีหรือเปล่า|Are you well or not?
ใช่ไหม|chai3 mai5|right? isn't it?|2|คุณเป็นครูใช่ไหม|You are a teacher, right?
เปล่า|bplaao2|no (not so)|2|เปล่า ผมไม่ได้ไป|No, I didn't go
#Softening and suggestion
นะ|na4|softener; please; right?|1|ไปด้วยกันนะ|Let's go together, okay?
สิ|si2|go on; do it (urging)|1|กินสิ|Go ahead, eat
ซิ|si4|urging, friendly|2|มาซิ|Come on
เถอะ|tɤ2|let's; please just (encouraging)|2|ไปเถอะ|Let's go
หน่อย|nɔɔi2|a bit; please (soft request)|1|ช่วยหน่อย|Please help me a bit
ด้วย|duai3|too; also; please (with help)|1|ไปด้วยนะ|I'm coming too
ซะ|sa4|just do it; get it over with|3|กินซะ|Just eat it
เลย|lɤɤi1|at all; just; right away|1|อร่อยมากเลย|Really delicious
#Emphasis and mood
นี่|nii3|you see; hey (calling attention)|2|นี่ไง|Here it is
น่ะ|na3|you know; as for (explaining)|2|ผมไม่รู้น่ะ|I just don't know
แหละ|lɛ2|that's it; indeed|2|ใช่แหละ|That's right
ล่ะ|la3|and what about; then|2|แล้วคุณล่ะ|And you?
หรอก|rɔɔk2|not really (denial)|2|ไม่เป็นไรหรอก|It's really no problem
เนอะ|nɤ4|right? (seeking agreement)|2|อร่อยเนอะ|Tasty, right?
นา|naa1|you know (friendly)|3|ไม่รู้นา|I really don't know
จัง|jang1|so; very (casual)|2|ร้อนจังเลย|It's so hot
แล้ว|lɛɛo4|already; then|1|กินแล้ว|I've already eaten
ก็|gɔɔ3|then; also; so (connecting)|1|ผมก็ไป|I'll go too
เอง|eeng1|oneself; by oneself|2|ผมทำเอง|I did it myself
สักหน่อย|sak2-nɔɔi2|just a little|3|ขอดูสักหน่อย|Let me look just a little
@questions|Questions|คำถาม|Question words|search|Question words keep the position of the answer, so the sentence order does not change.|The question word stays where the answer would be: คุณชื่ออะไร (you name what).;;Add ไหม at the end for yes/no questions.;;Answers repeat the verb: Q: ไปไหม A: ไป or ไม่ไป.;;เท่าไร asks price or quantity; กี่ needs a classifier: กี่คน.
#Wh-words
อะไร|a2-rai1|what|1|คุณชื่ออะไร|What is your name?
ใคร|krai1|who|1|นี่ใคร|Who is this?
ที่ไหน|tii3 nai5|where|1|ห้องน้ำอยู่ที่ไหน|Where is the bathroom?
ไหน|nai5|which; where|1|คุณไปไหน|Where are you going?
เมื่อไร|mɯa3-rai1|when|1|คุณมาเมื่อไร|When did you come?
ทำไม|tam1-mai1|why|1|ทำไมคุณไม่มา|Why didn't you come?
อย่างไร|yaang2-rai1|how|2|ทำอย่างไรดี|What should I do?
ยังไง|yang1-ngai1|how (colloquial)|2|ไปยังไง|How do I get there?
เท่าไร|taao3-rai1|how much|1|ราคาเท่าไร|How much is the price?
เท่าไหร่|taao3-rai2|how much (spoken)|1|อันนี้เท่าไหร่|How much is this?
กี่|gii2|how many (+classifier)|1|กี่คน|How many people?
อันไหน|an1 nai5|which one|2|คุณชอบอันไหน|Which one do you like?
แบบไหน|bɛɛp2 nai5|what kind|3|คุณชอบแบบไหน|What kind do you like?
#Question tags
ไหม|mai5|…or not?|1|ไปไหม|Shall we go?
ได้ไหม|dai3 mai5|may I? can you?|1|ขอนั่งได้ไหม|May I sit?
ใช่ไหม|chai3 mai5|right?|1|ใช่ไหม|Is that right?
ดีไหม|dii1 mai5|how about it?|2|ไปกินข้าวดีไหม|How about eating?
@pronouns|Pronouns|สรรพนาม|Pronouns|eye|Thai has many pronouns chosen by gender, age, relationship and formality. Names and kinship terms often replace “I” and “you”.|Pronouns are selected by relationship: use kinship words like พี่ or น้อง with people of different ages.;;คุณ is a safe polite “you”; ผม (male) and ฉัน or ดิฉัน (female) are neutral “I”.;;Thai often drops pronouns when the context is clear.;;กู and มึง are very rude; use them only with close friends.
#I and we
ผม|pom5|I (male, polite)|1|ผมชื่อสมชาย|My name is Somchai
ฉัน|chan5|I (female or neutral)|1|ฉันเป็นนักเรียน|I am a student
ดิฉัน|di2-chan5|I (female, formal)|2|ดิฉันขออนุญาตค่ะ|May I ask permission
หนู|nuu5|I (child; young woman to elders)|2|หนูไม่รู้ค่ะ|I don't know
เรา|rao1|we; I (friendly)|1|เราไปด้วยกัน|We go together
พวกเรา|puak3-rao1|we all|2|พวกเราสนุกมาก|We had lots of fun
กู|guu1|I (rude, very intimate)|3|กูไม่เอา|I don't want it
#You
คุณ|kun1|you (polite)|1|คุณสบายดีไหม|How are you?
เธอ|tɤɤ1|you (intimate); she|2|เธอสวยมาก|She is very beautiful
ท่าน|taan3|you; he; she (honorific)|3|ท่านนายกมาแล้ว|The prime minister has arrived
พี่|pii3|older sibling; you to someone older|1|พี่ไปไหนครับ|Where are you going?
น้อง|nɔɔng4|younger sibling; you to someone younger|1|น้องกินข้าวหรือยัง|Have you eaten?
มึง|mɯng1|you (rude, very intimate)|3|มึงไปไหน|Where are you going?
#He, she, it, they
เขา|kao5|he; she; they|1|เขาเป็นหมอ|He is a doctor
มัน|man1|it (also rude for people)|1|มันอร่อยมาก|It is very tasty
พวกเขา|puak3-kao5|they|2|พวกเขามาแล้ว|They have come
เขาทั้งสอง|kao5 tang4-sɔɔng5|the two of them|3|เขาทั้งสองเป็นเพื่อนกัน|The two of them are friends
#Demonstratives and others
นี่|nii3|this (stand-alone)|1|นี่คืออะไร|What is this?
นั่น|nan3|that (stand-alone)|1|นั่นคืออะไร|What is that?
โน่น|noon3|that over there|2|โน่นคือโรงเรียน|That over there is the school
นี้|nii4|this (after noun)|1|หนังสือเล่มนี้|This book
นั้น|nan4|that (after noun)|1|คนนั้น|That person
โน้น|noon4|that over there (after noun)|2|ตึกโน้น|That building over there
ตัวเอง|dtua1-eeng1|oneself|2|ดูแลตัวเองด้วย|Take care of yourself
ทุกคน|tuk4-kon1|everyone|1|ทุกคนมาแล้ว|Everyone has come
คนอื่น|kon1 ɯɯn2|other people|2|อย่าไปว่าคนอื่น|Don't blame others
ใครๆ|krai1 krai1|everybody|3|ใครๆ ก็รู้|Everybody knows
@prepositions|Prepositions|บุพบท|Prepositions|link|Thai prepositions link nouns to place, time, direction or relation. Many double as verbs.|Prepositions go before the noun: ที่ + place; ใน + container; กับ + companion.;;ที่ is “at” and also “that” (relative).;;ของ marks possession: หนังสือของผม.;;Place words like บน and ใน are nouns and can be extended: ข้างบน, ข้างใน.
#Place
ที่|tii3|at; in; that|1|ผมอยู่ที่บ้าน|I am at home
ใน|nai1|in; inside|1|ในห้อง|in the room
บน|bon1|on; above|1|บนโต๊ะ|on the table
ใต้|dtai3|under; below|1|ใต้เตียง|under the bed
ข้าง|kaang3|beside; next to|1|ข้างโรงเรียน|next to the school
หน้า|naa3|in front of|1|หน้าบ้าน|in front of the house
หลัง|lang5|behind; after|1|หลังบ้าน|behind the house
ระหว่าง|ra4-waang2|between|3|ระหว่างบ้านกับโรงเรียน|between the house and the school
ตรง|dtrong1|straight; at the point of|2|ตรงนี้|right here
รอบ|rɔɔp3|around|3|รอบบ้าน|around the house
#Direction
จาก|jaak2|from|1|ผมมาจากไทย|I come from Thailand
ถึง|tɯng5|to; arrive at|1|ถึงเชียงใหม่|arrive in Chiang Mai
ไป|bpai1|toward; to go|1|ไปตลาด|go to the market
สู่|suu2|toward (literary)|4|สู่อนาคต|toward the future
ตาม|dtaam1|along; according to|2|ตามถนน|along the road
ผ่าน|paan2|past; through|2|ผ่านสะพาน|past the bridge
#Relation
กับ|gap2|with; and|1|ผมไปกับเพื่อน|I go with a friend
ของ|kɔɔng5|of; belonging to|1|ของผม|mine
ให้|hai3|for; to; give|1|ซื้อให้แม่|buy for mother
เพื่อ|pɯa3|for the purpose of|3|เพื่อสุขภาพ|for health
โดย|dooi1|by; through|3|โดยรถไฟ|by train
แก่|gɛɛ2|to (formal)|4|ให้แก่ครู|give to the teacher
ต่อ|dtɔɔ2|toward; continue|3|ต่อไป|from now on
เกี่ยวกับ|giao2-gap2|about|3|เกี่ยวกับภาษาไทย|about the Thai language
สำหรับ|sam5-rap2|for|3|สำหรับคุณ|for you
แทน|taan1|instead of|3|แทนผม|instead of me
ตั้งแต่|dtang3-dtɛɛ2|since; from|3|ตั้งแต่เช้า|since morning
@conjunctions|Conjunctions|คำสันธาน|Conjunctions|shuffle|Conjunctions join words and clauses and signal and, but, because or if. Many work in pairs.|Thai uses different words for “and” depending on what is joined: และ for clauses, กับ for nouns.;;Paired patterns are common: ถ้า…ก็, เพราะ…จึง, แม้…แต่.;;แต่ starts the contrasting clause; the subject often follows it.;;คือ links an item to its explanation.
#And, or, but
และ|lɛ4|and (formal)|1|ผมชอบกาแฟและชา|I like coffee and tea
กับ|gap2|and; with|1|ผมกับเธอ|she and I
หรือ|rɯɯ5|or|1|ชาหรือกาแฟ|tea or coffee
แต่|dtɛɛ2|but|1|อยากไปแต่ไม่มีเวลา|I want to go but have no time
แต่ว่า|dtɛɛ2-waa3|but (softer)|2|ดีแต่ว่าแพง|Good, but expensive
ส่วน|suan2|as for; whereas|3|ส่วนผม|as for me
ทั้ง…และ|tang4 lɛ3|both… and|3|ทั้งดีและถูก|both good and cheap
#Cause and condition
เพราะ|prɔ4|because|1|เพราะฝนตก|because it rains
เพราะฉะนั้น|prɔ4-cha2-nan4|therefore|3|เพราะฉะนั้นผมจึงไม่ไป|so I did not go
ดังนั้น|dang1-nan4|therefore|3|ดังนั้นเราต้องรีบ|so we must hurry
เลยต้อง|lɤɤi1 dtɔɔng3|so (colloquial result)|3|ฝนตกเลยต้องอยู่บ้าน|It rained so I stayed home
ถ้า|taa3|if|1|ถ้าฝนตก ผมจะไม่ไป|If it rains, I won't go
ถ้า…ก็|taa3 gɔɔ3|if… then|2|ถ้ามีเวลาก็ไป|If I have time, I'll go
ถึงแม้|tɯng5-mɛɛ4|although|3|ถึงแม้ฝนตก ผมก็ไป|Although it rains, I go
แม้ว่า|mɛɛ4-waa3|even though|3|แม้ว่าเหนื่อย|even though tired
#Time and sequence
เมื่อ|mɯa3|when|2|เมื่อถึงบ้าน|when arriving home
ตอนที่|dtɔɔn1 tii3|when|2|ตอนที่ผมมา|when I came
ก่อน|gɔɔn2|before|1|ก่อนนอน|before sleeping
หลังจาก|lang5-jaak2|after|2|หลังจากกินข้าว|after eating
ขณะที่|ka2-na2 tii3|while|4|ขณะที่ฝนตก|while it rains
จนกว่า|jon1-gwaa2|until|4|จนกว่าจะเสร็จ|until it's finished
แล้วก็|lɛɛo4 gɔɔ3|and then|2|กินข้าวแล้วก็นอน|eat and then sleep
ที่|tii3|that; who; which (relative)|2|คนที่มา|the person who came
ว่า|waa3|that (reporting)|2|เขาบอกว่าไป|he said that he goes
@modals|Modals|กริยานุเคราะห์|Modal & auxiliary verbs|target|Auxiliaries and modals express ability, necessity, desire, tense and aspect. They precede or follow the main verb.|Thai verbs never conjugate: tense is shown by auxiliaries like กำลัง, จะ, เคย and แล้ว.;;ได้ before a verb means received, did or may; after a verb it means can.;;Negate the modal, not the verb: ไม่ต้อง, ไม่อยาก.;;Modals can be stacked: อาจจะต้องไป.
#Ability and permission
ได้|dai3|can; get; did|1|ผมพูดไทยได้|I can speak Thai
ไม่ได้|mai3 dai3|cannot; didn't|1|ผมไม่ได้ไป|I did not go
สามารถ|saa5-maat3|be able to (formal)|3|เขาสามารถร้องเพลง|He is able to sing
เป็น|bpen1|know how to|1|ผมว่ายน้ำเป็น|I can swim
ไหว|wai5|manage to|3|เดินไหวไหม|Can you walk it?
#Necessity and advice
ต้อง|dtɔɔng3|must; have to|1|ผมต้องไปแล้ว|I have to go now
ควร|kuan1|should|2|คุณควรพักผ่อน|You should rest
ไม่ต้อง|mai3 dtɔɔng3|don't have to|2|ไม่ต้องรีบ|No need to hurry
ห้าม|haam3|forbidden|2|ห้ามสูบบุหรี่|No smoking
#Desire and intention
อยาก|yaak2|want to|1|ผมอยากไป|I want to go
ต้องการ|dtɔɔng3-gaan1|need; want|2|ผมต้องการน้ำ|I need water
จะ|ja2|will; going to|1|พรุ่งนี้ผมจะไป|I will go tomorrow
ชอบ|chɔɔp3|like to|1|ผมชอบอ่านหนังสือ|I like to read
กล้า|glaa3|dare|3|เขากล้าพูด|He dares to speak
ยอม|yɔɔm1|be willing|3|เขาไม่ยอมไป|He refuses to go
ลอง|lɔɔng1|try|2|ลองชิมดู|Try tasting it
#Possibility
อาจ|aat2|may; possibly|3|อาจฝนตก|It may rain
คง|kong1|probably|2|เขาคงมา|He will probably come
น่าจะ|naa3-ja2|ought to; probably|3|น่าจะดี|It should be good
#Tense and aspect
กำลัง|gam1-lang1|in the middle of|1|ผมกำลังกินข้าว|I am eating
แล้ว|lɛɛo4|already (completed)|1|ไปแล้ว|already left
ยัง|yang1|still; yet|1|ยังไม่กิน|have not eaten yet
เคย|kɤɤi1|have ever|1|ผมเคยไปไทย|I have been to Thailand
เพิ่ง|pɤɤng3|just now|2|ผมเพิ่งมา|I just arrived
อยู่|yuu2|continuing state|1|เขานั่งอยู่|He is sitting
@adverbs|Adverbs|คำวิเศษณ์|Adverbs|sparkle|Adverbs of degree, frequency and manner. In Thai they follow the word they modify, with a few exceptions.|Degree adverbs follow adjectives: ร้อนมาก, ดีที่สุด.;;Frequency adverbs usually come before the verb: ผมไปบ่อย.;;Duplicating an adverb or adjective (ๆ) can stress it: เร็วๆ means quickly.;;Adding จริงๆ or เลย strengthens a statement.
#Degree
มาก|maak3|very; much|1|ร้อนมาก|very hot
นิดหน่อย|nit4-nɔɔi2|a little|1|เหนื่อยนิดหน่อย|a little tired
ค่อนข้าง|kɔɔn3-kaang3|rather; fairly|3|ค่อนข้างแพง|rather expensive
ที่สุด|tii3-sut2|the most|2|ดีที่สุด|the best
จริงๆ|jing1 jing1|really|2|ดีจริงๆ|really good
เกินไป|gɤɤn1 bpai1|too (much)|2|แพงเกินไป|too expensive
กว่า|gwaa2|more than|2|ใหญ่กว่า|bigger
เหมือนกัน|mɯan5-gan1|also; the same|2|ผมก็เหมือนกัน|Me too
#Frequency and time
บ่อย|bɔɔi2|often|1|ผมไปบ่อย|I go often
เสมอ|sa2-mɤɤ5|always|2|เขามาเสมอ|He always comes
ทุกวัน|tuk4-wan1|every day|1|ผมกินทุกวัน|I eat every day
บางครั้ง|baang1-kraang4|sometimes|2|บางครั้งผมไป|Sometimes I go
ไม่ค่อย|mai3-kɔɔi3|not very; rarely|2|ไม่ค่อยดี|not very good
ตลอด|dta2-lɔɔt3|throughout; all the time|3|ตลอดวัน|all day
ทันที|tan1-tii1|immediately|3|ไปทันที|go immediately
เดี๋ยว|diao5|in a moment|2|เดี๋ยวมา|Be back in a moment
เร็ว|reo1|fast; quickly|1|พูดเร็ว|speak fast
ช้า|chaa4|slow; slowly|1|พูดช้าๆ|speak slowly
#Manner and other
ด้วยกัน|duai3-gan1|together|1|ไปด้วยกัน|go together
อีก|iik2|again; more|1|อีกครั้ง|one more time
แค่|kɛɛ3|only; just|2|แค่นี้|just this
เท่านั้น|tao3-nan4|only|3|เขาคนเดียวเท่านั้น|only him
คนเดียว|kon1 diao1|alone|2|อยู่คนเดียว|live alone
เอง|eeng1|by oneself|2|ผมทำเอง|I did it myself
@negation|Negation|คำปฏิเสธ|Negation words|x|Thai negates with ไม่ before the verb or adjective. A few special forms cover past, existence and prohibition.|ไม่ goes before the verb: ไม่ไป.;;ไม่ได้ negates the past: ผมไม่ได้ไป.;;ไม่มี means there is none, ไม่ใช่ means is not (identity).;;อย่า and ห้าม forbid.
#The basics
ไม่|mai3|not|1|ผมไม่ไป|I'm not going
ไม่ได้|mai3 dai3|did not; cannot|1|ผมไม่ได้กิน|I did not eat
ไม่ใช่|mai3 chai3|is not (identity)|1|ผมไม่ใช่ครู|I am not a teacher
ไม่มี|mai3 mii1|there is no; do not have|1|ไม่มีเงิน|no money
ยังไม่|yang1 mai3|not yet|1|ยังไม่กิน|have not eaten yet
ไม่ต้อง|mai3 dtɔɔng3|do not have to|1|ไม่ต้องไป|No need to go
#Prohibition and degree
อย่า|yaa2|don't|1|อย่าไป|Don't go
ห้าม|haam3|forbidden|2|ห้ามเข้า|No entry
ไม่เคย|mai3 kɤɤi1|never|2|ผมไม่เคยไป|I have never been
ไม่ค่อย|mai3 kɔɔi3|not very|2|ไม่ค่อยสบาย|not feeling very well
ไม่เลย|mai3 lɤɤi1|not at all|2|ไม่ชอบเลย|do not like at all
ไม่ว่า|mai3 waa3|no matter|4|ไม่ว่าใคร|no matter who
ไม่เป็นไร|mai3 bpen1 rai1|never mind; it's okay|1|ไม่เป็นไรครับ|It's okay
ไม่เอา|mai3 ao1|don't want|2|ไม่เอาครับ|No thanks
ไม่รู้|mai3 ruu4|don't know|1|ผมไม่รู้|I don't know
ไม่ชอบ|mai3 chɔɔp3|dislike|1|ผมไม่ชอบ|I don't like it
@time|Time|เวลา|Time words|repeat|Days, parts of the day, relative time and the Thai clock. Time words usually come at the start of the sentence or before the verb.|Time comes first: พรุ่งนี้ผมจะไป.;;Thai tells time with a split day: โมง, ทุ่ม, ตี.;;Days of the week are วัน + name: วันจันทร์.;;The year is counted in the Buddhist Era (BE = CE + 543).
#Days and relative time
วันนี้|wan1-nii4|today|1|วันนี้ร้อน|Today is hot
พรุ่งนี้|prung3-nii4|tomorrow|1|พรุ่งนี้ว่างไหม|Are you free tomorrow?
เมื่อวาน|mɯa3-waan1|yesterday|1|เมื่อวานฝนตก|It rained yesterday
ตอนนี้|dtɔɔn1-nii4|now|1|ตอนนี้กี่โมง|What time is it now?
เมื่อกี้|mɯa3-gii3|a moment ago|2|เมื่อกี้ใครมา|Who came a moment ago?
ปีนี้|bpii1-nii4|this year|1|ปีนี้ผมไปไทย|This year I go to Thailand
#Parts of the day
เช้า|chaao4|morning|1|ตอนเช้า|in the morning
บ่าย|baai2|afternoon|1|ตอนบ่าย|in the afternoon
เย็น|yen1|evening|1|ตอนเย็น|in the evening
คืน|kɯɯn1|night|1|ตอนกลางคืน|at night
กลางวัน|glaang1-wan1|daytime|2|ตอนกลางวัน|during the day
#Weekdays
วันจันทร์|wan1 jan1|Monday|1|วันจันทร์ผมทำงาน|On Monday I work
วันอังคาร|wan1 ang1-kaan1|Tuesday|1|วันอังคารเรียน|Tuesday study
วันพุธ|wan1 put4|Wednesday|1|วันพุธว่าง|free on Wednesday
วันศุกร์|wan1 suk2|Friday|1|วันศุกร์ไปเที่ยว|go out on Friday
วันเสาร์|wan1 sao5|Saturday|1|วันเสาร์พักผ่อน|rest on Saturday
วันอาทิตย์|wan1 aa1-tit4|Sunday|1|วันอาทิตย์อยู่บ้าน|stay home on Sunday
#Clock and units
เวลา|wee1-laa1|time|1|ไม่มีเวลา|no time
โมง|moong1|o'clock (daytime)|1|สามโมง|three o'clock
ทุ่ม|tum3|evening o'clock (7-11 pm)|2|สองทุ่ม|8 pm
ตี|dtii1|small hours (1-5 am)|2|ตีสอง|2 am
นาที|naa1-tii1|minute|1|ห้านาที|five minutes
ชั่วโมง|chua3-moong1|hour|1|สองชั่วโมง|two hours
วัน|wan1|day|1|สามวัน|three days
สัปดาห์|sap2-daa1|week|2|หนึ่งสัปดาห์|one week
เดือน|dɯan1|month|1|เดือนหน้า|next month
ปี|bpii1|year|1|สองปี|two years
@location|Location|ตำแหน่ง|Location & direction words|grid|Words for position and direction. Many are nouns that combine with ที่ and prepositions.|Positions follow the noun: บนโต๊ะ, ในห้อง.;;Add ข้าง- for a full form: ข้างบน, ข้างล่าง.;;ใกล้ and ไกล are adjectives: บ้านผมไกล.;;Directions come after the verb: เลี้ยวซ้าย, ตรงไป.
#Positions
บน|bon1|on; above|1|บนโต๊ะ|on the table
ล่าง|laang3|below|1|ข้างล่าง|downstairs
ข้างใน|kaang3-nai1|inside|1|ข้างในร้อน|It's hot inside
ข้างนอก|kaang3-nɔɔk3|outside|1|ข้างนอกฝนตก|It's raining outside
ข้างหน้า|kaang3-naa3|in front|1|ข้างหน้ามีร้าน|There's a shop ahead
ข้างหลัง|kaang3-lang5|behind|1|ข้างหลังบ้าน|behind the house
ตรงข้าม|dtrong1-kaam3|opposite|2|ตรงข้ามโรงเรียน|opposite the school
ระหว่าง|ra4-waang2|between|3|ระหว่างสองร้าน|between two shops
ที่นี่|tii3-nii3|here|1|ที่นี่สวย|It's beautiful here
ที่นั่น|tii3-nan3|there|1|ที่นั่นไกล|It's far there
#Directions
ซ้าย|saai4|left|1|เลี้ยวซ้าย|turn left
ขวา|kwaa5|right|1|เลี้ยวขวา|turn right
ตรงไป|dtrong1-bpai1|straight on|1|ตรงไปเลย|Go straight
เหนือ|nɯa5|north|2|ทางเหนือ|the north
ใต้|dtai3|south; under|2|ทางใต้|the south
ตะวันออก|dta2-wan1-ɔɔk2|east|2|ทางตะวันออก|the east
ตะวันตก|dta2-wan1-dtok2|west|2|ทางตะวันตก|the west
#Distance
ใกล้|glai3|near|1|บ้านผมใกล้|My home is near
ไกล|glai1|far|1|ไกลมาก|very far
ตรงนี้|dtrong1-nii4|right here|1|จอดตรงนี้|Stop here
ตรงนั้น|dtrong1-nan4|right there|1|ตรงนั้นมีร้าน|There's a shop there
@numbers|Numbers|ตัวเลข|Numbers & quantity|list|Cardinal numbers, ordinals, fractions and quantity words. Numbers go before a classifier: สามคน (three people).|The pattern is noun + number + classifier: นักเรียนสามคน.;;หนึ่ง becomes เอ็ด in 11, 21: สิบเอ็ด, ยี่สิบเอ็ด; สอง becomes ยี่ in 20.;;Ordinals use ที่ + number: ที่หนึ่ง.;;For approximate quantities use ประมาณ or สอง-สามคน.
#Digits
ศูนย์|suun5|zero|1|ศูนย์|zero
หนึ่ง|nɯng2|one|1|หนึ่งคน|one person
สอง|sɔɔng5|two|1|สองคน|two people
สาม|saam5|three|1|สามวัน|three days
สี่|sii2|four|1|สี่บาท|four baht
ห้า|haa3|five|1|ห้าบาท|five baht
หก|hok2|six|1|หกโมง|six o'clock
เจ็ด|jet2|seven|1|เจ็ดวัน|seven days
แปด|bpɛɛt2|eight|1|แปดคน|eight people
เก้า|gaao3|nine|1|เก้าบาท|nine baht
สิบ|sip2|ten|1|สิบบาท|ten baht
#Tens and up
สิบเอ็ด|sip2-et2|eleven|2|สิบเอ็ดคน|eleven people
ยี่สิบ|yii3-sip2|twenty|2|ยี่สิบบาท|twenty baht
สามสิบ|saam5-sip2|thirty|2|สามสิบบาท|thirty baht
ร้อย|rɔɔi4|hundred|1|ร้อยบาท|one hundred baht
พัน|pan1|thousand|2|พันบาท|one thousand baht
หมื่น|mɯɯn2|ten thousand|2|หนึ่งหมื่น|ten thousand
แสน|sɛɛn5|hundred thousand|3|หนึ่งแสน|one hundred thousand
ล้าน|laan4|million|2|หนึ่งล้าน|one million
#Quantity words
ทุก|tuk4|every|1|ทุกวัน|every day
ทั้งหมด|tang4-mot2|all; total|2|ทั้งหมดเท่าไร|How much altogether?
หลาย|laai5|many; several|2|หลายคน|many people
บาง|baang1|some|2|บางคน|some people
ครึ่ง|krɯng3|half|2|ครึ่งชั่วโมง|half an hour
คู่|kuu3|pair; couple|2|หนึ่งคู่|one pair
ที่|tii3|ordinal marker|2|ที่หนึ่ง|first
ประมาณ|bpra2-maan1|approximately|3|ประมาณสิบคน|about ten people
มากมาย|maak3-maai1|plenty|3|มีมากมาย|there are plenty
@interjections|Interjections|คำอุทาน|Interjections & fillers|chat|Short exclamations that express surprise, pain, hesitation and agreement. They give Thai its natural rhythm.|Thai exclamations are often written with tone marks to match the speaker's voice.;;ครับ or ค่ะ after an interjection keeps it polite.;;Fillers like อืม and คือ give time to think.;;Laughter is written as 555 (ห้า = haa).
#Surprise and feeling
อ้าว|aao3|oh! (unexpected)|2|อ้าว ทำไมกลับแล้ว|Oh, why are you leaving already?
โอ้โห|oo3-hoo5|wow|2|โอ้โห สวยมาก|Wow, so beautiful
อุ๊ย|ui4|oops; ouch|2|อุ๊ย ตกแล้ว|Oops, it fell
ว้าย|waai4|eek (female)|3|ว้าย ตกใจ|Eek, I'm startled
เฮ้ย|hɤɤi4|hey!; whoa (casual)|3|เฮ้ย จริงเหรอ|Whoa, really?
อ๋อ|ɔɔ5|oh I see|1|อ๋อ เข้าใจแล้ว|Oh, I see
เอ๊ะ|e4|huh?|3|เอ๊ะ อะไรนะ|Huh, what?
โอเค|oo1-kee1|okay|1|โอเคครับ|Okay
ไชโย|chai1-yoo1|hooray|3|ไชโย ชนะแล้ว|Hooray, we won
#Fillers and responses
อืม|ɯɯm1|um; mm|2|อืม ขอคิดก่อน|Um, let me think
คือ|kɯɯ1|that is; well|2|คือผมไม่แน่ใจ|Well, I'm not sure
ครับ|krap4|yes (polite)|1|ครับ ผมเข้าใจ|Yes, I understand
ค่ะ|kaa3|yes (polite, female)|1|ค่ะ ได้ค่ะ|Yes, okay
ใช่|chai3|yes; that's right|1|ใช่ ถูกต้อง|Yes, that's right
ไม่ใช่|mai3 chai3|no; that's wrong|1|ไม่ใช่ครับ|No`;
const RAW_CLS = `อัน|an1|small objects, utensils, general things|ส้อม:sɔɔm3:fork;ช้อน:chɔɔn4:spoon;มีด:miit3:knife;หวี:wii5:comb
ตัว|dtua1|animals, clothes, tables, letters, characters|หมา:maa5:dog;แมว:mɛɛo1:cat;เสื้อ:sɯa3:shirt;กางเกง:gaang1-geeng1:trousers;โต๊ะ:dto4:table;ปลา:bplaa1:fish
คน|kon1|people (not monks or royalty)|นักเรียน:nak4-rian1:student;หมอ:mɔɔ5:doctor;เพื่อน:pɯan3:friend;ครู:kruu1:teacher;เด็ก:dek2:child
ใบ|bai1|bags, hats, tickets, containers, leaves|กระเป๋า:gra2-bpao5:bag;หมวก:muak2:hat;ตะกร้า:dta2-graa3:basket;ตั๋ว:dtua5:ticket
ลูก|luuk3|round things: fruits, balls, mountains|ส้ม:som3:orange;มะม่วง:ma4-muang3:mango;ภูเขา:puu1-kao5:mountain;บอล:bɔɔn1:ball
ผล|pon5|fruits (formal), results|ส้ม:som3:orange;มะม่วง:ma4-muang3:mango;ฝรั่ง:fa2-rang3:guava;เงาะ:ngɔ4:rambutan
เล่ม|lem3|books, knives, candles, needles, notebooks|หนังสือ:nang5-sɯɯ5:book;สมุด:sa2-mut4:notebook;ปากกา:bpaak2-gaa1:pen;เทียน:tian1:candle;มีด:miit3:knife;เข็ม:kem5:needle
แผ่น|pɛɛn2|flat thin things: paper, glass, tiles, discs|กระดาษ:gra2-daat2:paper;กระจก:gra2-jok2:glass;กระเบื้อง:gra2-bɯang3:tile;ซีดี:sii1-dii1:CD
ชิ้น|chin4|pieces, slices, items|เค้ก:kek4:cake;เนื้อ:nɯa4:meat;ไก่:gai2:chicken;ผ้า:paa3:cloth
เม็ด|met4|grains, pills, seeds, beads|ยา:yaa1:medicine;ข้าว:kaao3:rice;ถั่ว:tua2:beans;ทราย:saai1:sand
ด้าม|daam3|pens, pencils, tools with a handle|ปากกา:bpaak2-gaa1:pen;ดินสอ:din1-sɔɔ5:pencil;ค้อน:kɔɔn4:hammer;แปรง:bprɛɛng1:brush
คัน|kan1|vehicles, umbrellas|รถ:rot4:car;จักรยาน:jak2-gra2-yaan1:bicycle;ร่ม:rom3:umbrella;รถเมล์:rot4-mee1:bus
หลัง|lang5|houses, buildings, mosquito nets|บ้าน:baan3:house;ตึก:dtɯk2:building;กระท่อม:gra2-tɔɔm3:hut;มุ้ง:mung4:mosquito net
ห้อง|hɔɔng3|rooms|ห้องนอน:hɔɔng3-nɔɔn1:bedroom;ห้องน้ำ:hɔɔng3-naam4:bathroom;ห้องครัว:hɔɔng3-krua1:kitchen;ห้องเรียน:hɔɔng3-rian1:classroom;ห้องพัก:hɔɔng3-pak4:guest room
ที่|tii3|seats, places, portions, positions|ที่นั่ง:tii3-nang3:seat;ที่พัก:tii3-pak4:accommodation;ที่จอดรถ:tii3-jɔɔt2-rot4:parking space
แห่ง|hɛɛng2|places, institutions|วัด:wat4:temple;โรงพยาบาล:roong1-pa4-yaa1-baan1:hospital;ธนาคาร:ta4-naa1-kaan1:bank;ห้องสมุด:hɔɔng3-sa2-mut4:library
เรื่อง|rɯang3|stories, films, news, matters|หนัง:nang5:film;ละคร:la4-kɔɔn1:TV drama;นิทาน:ni4-taan1:tale;ข่าว:kaao2:news
เครื่อง|krɯang3|machines, appliances, devices|คอมพิวเตอร์:kɔɔm1-piu1-dtɤɤ1:computer;พัดลม:pat4-lom1:fan;ตู้เย็น:dtuu3-yen1:refrigerator;ทีวี:tii1-wii1:television
ฉบับ|cha2-bap2|newspapers, letters, documents, contracts|หนังสือพิมพ์:nang5-sɯɯ5-pim1:newspaper;จดหมาย:jot2-maai5:letter;สัญญา:san5-yaa1:contract;เอกสาร:eek2-ga2-saan5:document
ชุด|chut4|sets, outfits, suites|เสื้อผ้า:sɯa3-paa3:clothes;ช้อนส้อม:chɔɔn4-sɔɔm3:cutlery;เครื่องมือ:krɯang3-mɯɯ1:tools;โซฟา:soo1-faa1:sofa
คู่|kuu3|pairs, couples|ตะเกียบ:dta2-giap2:chopsticks;ถุงมือ:tung5-mɯɯ1:gloves;ต่างหู:dtaang2-huu5:earrings
ต้น|dton3|trees, plants|กล้วย:gluai3:banana;มะพร้าว:ma4-praao4:coconut;สน:son5:pine;ไผ่:pai2:bamboo
ดอก|dɔɔk2|flowers|กุหลาบ:gu2-laap2:rose;มะลิ:ma4-li4:jasmine;บัว:bua1:lotus;กล้วยไม้:gluai3-maai4:orchid
เส้น|seen3|long thin things: hair, rope, thread, roads|ผม:pom5:hair;เชือก:chɯak3:rope;ด้าย:daai3:thread;สร้อย:sɔɔi3:necklace
สาย|saai5|lines, rivers, routes, chains|แม่น้ำ:mɛɛ3-naam4:river;รถไฟ:rot4-fai1:train line;รถเมล์:rot4-mee1:bus route;สร้อย:sɔɔi3:necklace
แก้ว|gɛɛo3|glasses of drink|น้ำ:naam4:water;กาแฟ:gaa1-fɛɛ1:coffee;นม:nom1:milk;เบียร์:bia1:beer;ชา:chaa1:tea
ขวด|kuat2|bottles|น้ำ:naam4:water;เบียร์:bia1:beer;น้ำปลา:naam4-bplaa1:fish sauce;น้ำมัน:naam4-man1:oil
ถ้วย|tuai3|cups, small bowls|กาแฟ:gaa1-fɛɛ1:coffee;ซุป:sup4:soup;ข้าวต้ม:kaao3-dtom3:rice soup;ชา:chaa1:tea
จาน|jaan1|plates, dishes of food|ข้าวผัด:kaao3-pat2:fried rice;ส้มตำ:som3-dtam1:papaya salad;ผัดไทย:pat2-tai1:pad thai;สลัด:sa2-lat4:salad
ชาม|chaam1|bowls|ก๋วยเตี๋ยว:guai5-dtiao5:noodles;ข้าวต้ม:kaao3-dtom3:rice soup;ซุป:sup4:soup;บะหมี่:ba2-mii2:egg noodles;แกง:gɛɛng1:curry
กล่อง|glɔɔng2|boxes|ยา:yaa1:medicine;ของขวัญ:kɔɔng5-kwan5:gift;นม:nom1:milk;ดินสอ:din1-sɔɔ5:pencil
ถุง|tung5|bags, sacks|ข้าวสาร:kaao3-saan5:uncooked rice;ทราย:saai1:sand;ผลไม้:pon5-la4-maai4:fruit;ปูน:bpuun1:cement
ห่อ|hɔɔ2|packets, parcels, wrapped things|พัสดุ:pat4-sa2-du2:parcel;บุหรี่:bu2-rii2:cigarettes;ของขวัญ:kɔɔng5-kwan5:gift;ผ้า:paa3:cloth
ครั้ง|krang4|times, occasions|การประชุม:gaan1-bpra2-chum1:meeting;การเดินทาง:gaan1-dɤɤn1-taang1:trip;การสอบ:gaan1-sɔɔp2:exam;การแข่งขัน:gaan1-kɛɛng2-kan5:competition
ชั้น|chan4|floors, storeys, classes, layers|ตึก:dtɯk2:building;โรงแรม:roong1-rɛɛm1:hotel;หอพัก:hɔɔ5-pak4:dormitory
ลำ|lam1|boats, aircraft, canals|เรือ:rɯa1:boat;เครื่องบิน:krɯang3-bin1:aeroplane;คลอง:klɔɔng1:canal;เรือใบ:rɯa1-bai1:sailboat
องค์|ong1|monks, royalty, deities, Buddha images|พระ:pra4:monk;กษัตริย์:ga2-sat2:king;เทพ:teep3:deity;ประธาน:bpra2-taan1:chairperson
รูป|ruup3|monks, pictures, statues|พระ:pra4:monk;สามเณร:saa5-ma4-neen1:novice;ภาพ:paap3:picture;รูปถ่าย:ruup3-taai2:photograph
ท่าน|taan3|respected people (polite)|ผู้ใหญ่:pu3-yai2:adult;อาจารย์:aa1-jaan1:teacher;แขก:kɛɛk2:guest;ประธาน:bpra2-taan1:chairperson
คณะ|ka4-na4|groups, delegations, troupes, faculties|ละคร:la4-kɔɔn1:drama troupe;ทูต:tuut3:envoy;นักท่องเที่ยว:nak4-tɔɔng3-tiao3:tourist;ผู้แทน:pu3-tɛɛn1:representative
กลุ่ม|glum2|groups, clusters|เพื่อน:pɯan3:friend;นักเรียน:nak4-rian1:student;นักท่องเที่ยว:nak4-tɔɔng3-tiao3:tourist;เมฆ:meek3:cloud;ผู้ชม:pu3-chom1:audience
คำ|kam1|words, mouthfuls|ข้าว:kaao3:rice;อาหาร:aa1-haan5:food;เค้ก:kek4:cake;ซุป:sup4:soup
สิ่ง|sing2|abstract things, items|ของ:kɔɔng5:thing;ปัญหา:bpan1-haa5:problem;ความฝัน:kwaam1-fan5:dream;ความลับ:kwaam1-lap4:secret
มื้อ|mɯɯ4|meals|อาหาร:aa1-haan5:food;อาหารเย็น:aa1-haan5-yen1:dinner;อาหารเที่ยง:aa1-haan5-tiang3:lunch;อาหารค่ำ:aa1-haan5-kam3:dinner
โรง|roong1|theatres, factories, hotels, schools|โรงแรม:roong1-rɛɛm1:hotel;โรงงาน:roong1-ngaan1:factory;โรงเรียน:roong1-rian1:school;โรงหนัง:roong1-nang5:cinema
ผืน|pɯɯn5|sheets of fabric, mats, flags, land|ผ้า:paa3:cloth;ผ้าห่ม:paa3-hom2:blanket;พรม:prom1:carpet;ธง:tong1:flag;เสื่อ:sɯa2:mat
ข้อ|kɔɔ3|items, clauses, questions, points|คำถาม:kam1-taam5:question;กฎ:got2:rule;เงื่อนไข:ngɯan3-kai5:condition;คำตอบ:kam1-dtɔɔp2:answer
หน้า|naa3|pages, faces|หนังสือ:nang5-sɯɯ5:book;สมุด:sa2-mut4:notebook;หนังสือพิมพ์:nang5-sɯɯ5-pim1:newspaper;รายงาน:raai1-ngaan1:report
กอง|gɔɔng1|piles, heaps, troops|หนังสือ:nang5-sɯɯ5:book;ทราย:saai1:sand;ฟืน:fɯɯn1:firewood;เสื้อผ้า:sɯa3-paa3:clothes
ฝูง|fuung5|herds, flocks, swarms|ปลา:bplaa1:fish;นก:nok4:bird;วัว:wua1:cow;ช้าง:chaang4:elephant;แกะ:gɛ2:sheep
ซอง|sɔɔng1|envelopes, sachets|จดหมาย:jot2-maai5:letter;ยา:yaa1:medicine;กาแฟ:gaa1-fɛɛ1:coffee;น้ำตาล:naam4-dtaan1:sugar
แท่ง|tɛɛng3|sticks, bars|ดินสอ:din1-sɔɔ5:pencil;เทียน:tian1:candle;ทอง:tɔɔng1:gold;ธูป:tuup3:incense
ก้อน|gɔɔn3|lumps, chunks|หิน:hin5:stone;น้ำแข็ง:naam4-kɛng5:ice;เมฆ:meek3:cloud;สบู่:sa2-buu2:soap;ดิน:din1:soil
ราย|raai1|cases, individuals (formal)|ผู้ป่วย:pu3-bpuai2:patient;ลูกค้า:luuk3-kaa4:customer;ผู้โดยสาร:pu3-dooi1-saan5:passenger
ตอน|dtɔɔn1|episodes, parts, sections|ละคร:la4-kɔɔn1:TV drama;การ์ตูน:gaa1-dtuun1:cartoon;รายการ:raai1-gaan1:programme
ชนิด|cha4-nit4|kinds, types|ผลไม้:pon5-la4-maai4:fruit;ปลา:bplaa1:fish;อาหาร:aa1-haan5:food;ดอกไม้:dɔɔk2-maai4:flower
ฟอง|fɔɔng1|eggs, bubbles|ไข่:kai2:egg;ไข่ไก่:kai2-gai2:chicken egg;ไข่เป็ด:kai2-bpet2:duck egg;ไข่ต้ม:kai2-dtom3:boiled egg
หัว|hua5|bulbs, heads of vegetables|หอมใหญ่:hɔɔm5-yai2:onion;กระเทียม:gra2-tiam1:garlic;มันฝรั่ง:man1-fa2-rang3:potato
แถว|tɛɛo5|rows, lines of people or things|ต้นไม้:dton3-maai4:tree;บ้าน:baan3:house;ที่นั่ง:tii3-nang3:seat;รถ:rot4:car
หลอด|lɔɔt2|tubes, straws|ยาสีฟัน:yaa1-sii5-fan1:toothpaste;ไฟ:fai1:light;ครีม:kriim1:cream;กาว:gaao1:glue
ท่อน|tɔɔn3|sections, logs, lengths|ไม้:maai4:wood;ซุง:sung1:log;เหล็ก:lek2:iron;ท่อ:tɔɔ3:pipe`;
const RAW_PHRASES = `สวัสดีครับ|sa2-wat2-dii1 krap4|Hello|Greetings|man speaking; woman: สวัสดีค่ะ
สวัสดีค่ะ|sa2-wat2-dii1 kaa3|Hello|Greetings|woman speaking
สบายดีไหมครับ|sa2-baai1 dii1 mai5 krap4|How are you?|Greetings|woman: สบายดีไหมคะ
สบายดีครับ ขอบคุณครับ|sa2-baai1 dii1 krap4 kɔɔp2-kun1 krap4|I'm fine, thank you|Greetings|woman: ค่ะ
แล้วคุณล่ะครับ|lɛɛo4 kun1 la3 krap4|And you?|Greetings|woman: ล่ะคะ
สวัสดีตอนเช้าครับ|sa2-wat2-dii1 dtɔɔn1 chao4 krap4|Good morning|Greetings|
ราตรีสวัสดิ์ครับ|raa1-dtrii1 sa2-wat2 krap4|Good night|Greetings|
ไม่ได้เจอกันนานเลยครับ|mai3 dai3 jɤɤ1 gan1 naan1 lɤɤi1 krap4|Long time no see|Greetings|
ลาก่อนครับ|laa1 gɔɔn2 krap4|Goodbye|Greetings|
แล้วพบกันใหม่ครับ|lɛɛo4 pop4 gan1 mai2 krap4|See you again|Greetings|
เจอกันพรุ่งนี้ครับ|jɤɤ1 gan1 prung3 nii4 krap4|See you tomorrow|Greetings|
ไปก่อนนะครับ|bpai1 gɔɔn2 na4 krap4|I'm leaving now|Greetings|casual and polite
ผมชื่อจอนครับ|pom5 chɯɯ3 jɔɔn1 krap4|My name is John|Introductions|man speaking
ดิฉันชื่อแอนค่ะ|di2-chan5 chɯɯ3 ɛɛn1 kaa3|My name is Ann|Introductions|woman speaking; formal
คุณชื่ออะไรครับ|kun1 chɯɯ3 a2-rai1 krap4|What is your name?|Introductions|woman: คะ
ยินดีที่ได้รู้จักครับ|yin1-dii1 tii3 dai3 ruu4 jak2 krap4|Nice to meet you|Introductions|woman: ค่ะ
คุณมาจากประเทศอะไรครับ|kun1 maa1 jaak2 bpra2-teet3 a2-rai1 krap4|Which country are you from?|Introductions|woman: คะ
ผมมาจากประเทศอังกฤษครับ|pom5 maa1 jaak2 bpra2-teet3 ang1-grit2 krap4|I come from England|Introductions|
ผมอายุสามสิบปีครับ|pom5 aa1-yu4 saam5 sip2 bpii1 krap4|I am thirty years old|Introductions|
ผมทำงานที่กรุงเทพครับ|pom5 tam1 ngaan1 tii3 grung1-teep3 krap4|I work in Bangkok|Introductions|
คุณทำงานอะไรครับ|kun1 tam1 ngaan1 a2-rai1 krap4|What do you do for work?|Introductions|woman: คะ
ผมเป็นนักเรียนครับ|pom5 bpen1 nak4 rian1 krap4|I am a student|Introductions|
นี่เพื่อนของผมครับ|nii3 pɯan3 kɔɔng5 pom5 krap4|This is my friend|Introductions|
ขอแนะนำตัวหน่อยครับ|kɔɔ5 nɛ4-nam1 dtua1 nɔɔi2 krap4|Let me introduce myself|Introductions|formal
ผมพูดภาษาไทยได้นิดหน่อยครับ|pom5 puut3 paa1-saa5 tai1 dai3 nit4 nɔɔi2 krap4|I speak a little Thai|Introductions|
ขอบคุณครับ|kɔɔp2-kun1 krap4|Thank you|Politeness|woman: ขอบคุณค่ะ
ขอบคุณค่ะ|kɔɔp2-kun1 kaa3|Thank you|Politeness|woman speaking
ขอบคุณมากครับ|kɔɔp2-kun1 maak3 krap4|Thank you very much|Politeness|
ไม่เป็นไรครับ|mai3 bpen1 rai1 krap4|It's okay; never mind|Politeness|
ขอโทษครับ|kɔɔ5 toot3 krap4|Sorry; excuse me|Politeness|woman: ขอโทษค่ะ
ขอโทษที่มาสายครับ|kɔɔ5 toot3 tii3 maa1 saai5 krap4|Sorry I am late|Politeness|
ยินดีครับ|yin1-dii1 krap4|You're welcome; my pleasure|Politeness|
เชิญครับ|chɤɤn1 krap4|Please go ahead|Politeness|
ขอผ่านหน่อยครับ|kɔɔ5 paan2 nɔɔi2 krap4|Excuse me, may I pass?|Politeness|
ช่วยพูดอีกครั้งได้ไหมครับ|chuai3 puut3 iik2 krang4 dai3 mai5 krap4|Could you say that again?|Politeness|
ช่วยพูดช้าลงหน่อยได้ไหมครับ|chuai3 puut3 chaa4 long1 nɔɔi2 dai3 mai5 krap4|Could you speak more slowly?|Politeness|
ผมไม่เข้าใจครับ|pom5 mai3 kao3 jai1 krap4|I don't understand|Politeness|
ผมเข้าใจแล้วครับ|pom5 kao3 jai1 lɛɛo4 krap4|I understand now|Politeness|
ขอเมนูหน่อยครับ|kɔɔ5 mee1-nuu1 nɔɔi2 krap4|May I have the menu?|Restaurant|
ผมอยากสั่งอาหารครับ|pom5 yaak2 sang2 aa1-haan5 krap4|I would like to order|Restaurant|
ขอน้ำเปล่าหนึ่งแก้วครับ|kɔɔ5 naam4 bplao2 nɯng2 gɛɛo3 krap4|One glass of water, please|Restaurant|
ขอข้าวผัดหนึ่งจานครับ|kɔɔ5 kaao3 pat2 nɯng2 jaan1 krap4|One plate of fried rice, please|Restaurant|
ผมไม่กินเผ็ดครับ|pom5 mai3 gin1 pet2 krap4|I don't eat spicy food|Restaurant|
ไม่ใส่พริกนะครับ|mai3 sai2 prik4 na4 krap4|No chili, please|Restaurant|
ผมแพ้อาหารทะเลครับ|pom5 pɛɛ4 aa1-haan5 ta4-lee1 krap4|I am allergic to seafood|Restaurant|
มีอะไรแนะนำไหมครับ|mii1 a2-rai1 nɛ4-nam1 mai5 krap4|Do you have any recommendations?|Restaurant|
อร่อยมากครับ|a2-rɔɔi2 maak3 krap4|Very delicious|Restaurant|
ผมอิ่มแล้วครับ|pom5 im2 lɛɛo4 krap4|I'm full|Restaurant|
เก็บเงินด้วยครับ|gep2 ngɤn1 duai3 krap4|The bill, please|Restaurant|
อันนี้ราคาเท่าไรครับ|an1 nii4 raa1-kaa1 tao3-rai1 krap4|How much is this?|Shopping|
แพงไปครับ|pɛɛng1 bpai1 krap4|It's too expensive|Shopping|
ลดได้ไหมครับ|lot4 dai3 mai5 krap4|Can you give a discount?|Shopping|
ถูกกว่านี้ได้ไหมครับ|tuuk2 gwaa2 nii4 dai3 mai5 krap4|Can it be cheaper than this?|Shopping|
ผมขอดูอันนั้นได้ไหมครับ|pom5 kɔɔ5 duu1 an1 nan4 dai3 mai5 krap4|May I see that one?|Shopping|
มีสีอื่นไหมครับ|mii1 sii5 ɯɯn2 mai5 krap4|Do you have other colors?|Shopping|
ผมขอลองได้ไหมครับ|pom5 kɔɔ5 lɔɔng1 dai3 mai5 krap4|May I try it?|Shopping|
ผมจะเอาอันนี้ครับ|pom5 ja2 ao1 an1 nii4 krap4|I'll take this one|Shopping|
ไม่เอาถุงครับ|mai3 ao1 tung5 krap4|No bag, thanks|Shopping|
ตลาดอยู่ที่ไหนครับ|dta2-laat2 yuu2 tii3 nai5 krap4|Where is the market?|Shopping|
ร้านนี้เปิดกี่โมงครับ|raan4 nii4 bpɤɤt2 gii2 moong1 krap4|What time does this shop open?|Shopping|
รับบัตรเครดิตไหมครับ|rap4 bat2 kree1-dit2 mai5 krap4|Do you accept credit cards?|Money|
รับแต่เงินสดครับ|rap4 dtɛɛ2 ngɤn1 sot2 krap4|Cash only|Money|
ผมอยากแลกเงินครับ|pom5 yaak2 lɛɛk3 ngɤn1 krap4|I want to exchange money|Money|
วันนี้อัตราแลกเปลี่ยนเท่าไรครับ|wan1 nii4 at2-dtraa1 lɛɛk3 bplian2 tao3-rai1 krap4|What is today's exchange rate?|Money|
ตู้เอทีเอ็มอยู่ที่ไหนครับ|dtuu3 ee1-tii1-em1 yuu2 tii3 nai5 krap4|Where is the ATM?|Money|
ผมขอใบเสร็จด้วยครับ|pom5 kɔɔ5 bai1 set2 duai3 krap4|May I have a receipt?|Money|
มีเงินทอนไหมครับ|mii1 ngɤn1 tɔɔn1 mai5 krap4|Do you have change?|Money|
โอนเงินได้ไหมครับ|oon1 ngɤn1 dai3 mai5 krap4|Can I pay by transfer?|Money|
ค่าใช้จ่ายทั้งหมดเท่าไรครับ|kaa3 chai4 jaai2 tang4 mot2 tao3-rai1 krap4|What is the total cost?|Money|
ผมมีเงินสดไม่พอครับ|pom5 mii1 ngɤn1 sot2 mai3 pɔɔ1 krap4|I don't have enough cash|Money|
ร้อยบาทครับ|rɔɔi4 baat2 krap4|One hundred baht|Money|
ห้องน้ำอยู่ที่ไหนครับ|hɔɔng3 naam4 yuu2 tii3 nai5 krap4|Where is the toilet?|Directions|
ขอดูแผนที่หน่อยครับ|kɔɔ5 duu1 pɛɛn5 tii3 nɔɔi2 krap4|May I look at the map?|Directions|
ผมหลงทางครับ|pom5 long5 taang1 krap4|I'm lost|Directions|
ไปสถานีรถไฟไปทางไหนครับ|bpai1 sa2-taa5-nii1 rot4 fai1 bpai1 taang1 nai5 krap4|Which way to the train station?|Directions|
ตรงไปครับ|dtrong1 bpai1 krap4|Go straight|Directions|
เลี้ยวซ้ายครับ|liao4 saai4 krap4|Turn left|Directions|
เลี้ยวขวาครับ|liao4 kwaa5 krap4|Turn right|Directions|
ผ่านสี่แยกแล้วเลี้ยวซ้ายครับ|paan2 sii2 yɛɛk3 lɛɛo4 liao4 saai4 krap4|Pass the intersection then turn left|Directions|
ไกลไหมครับ|glai1 mai5 krap4|Is it far?|Directions|
อยู่ใกล้ที่นี่ครับ|yuu2 glai3 tii3 nii3 krap4|It is near here|Directions|
เดินไปได้ไหมครับ|dɤɤn1 bpai1 dai3 mai5 krap4|Can I walk there?|Directions|
ใช้เวลากี่นาทีครับ|chai4 wee1-laa1 gii2 naa1-tii1 krap4|How many minutes does it take?|Directions|
ไปสนามบินครับ|bpai1 sa2-naam5 bin1 krap4|To the airport, please|Taxi and transport|to a taxi driver
ช่วยไปที่นี่หน่อยครับ|chuai3 bpai1 tii3 nii3 nɔɔi2 krap4|Please take me here|Taxi and transport|show the address
หยุดตรงนี้ครับ|yut2 dtrong1 nii4 krap4|Stop here|Taxi and transport|
ขอจอดข้างหน้าครับ|kɔɔ5 jɔɔt2 kaang3 naa3 krap4|Please stop up ahead|Taxi and transport|
ถึงแล้วครับ|tung5 lɛɛo4 krap4|We have arrived|Taxi and transport|
ค่ารถเท่าไรครับ|kaa3 rot4 tao3-rai1 krap4|How much is the fare?|Taxi and transport|
ซื้อตั๋วที่ไหนครับ|sɯɯ4 dtua5 tii3 nai5 krap4|Where do I buy a ticket?|Taxi and transport|
ขอตั๋วไปเชียงใหม่หนึ่งใบครับ|kɔɔ5 dtua5 bpai1 chiang1-mai2 nɯng2 bai1 krap4|One ticket to Chiang Mai, please|Taxi and transport|
รถไฟออกกี่โมงครับ|rot4 fai1 ɔɔk2 gii2 moong1 krap4|What time does the train leave?|Taxi and transport|
รถเมล์ไปตลาดไหมครับ|rot4 mee1 bpai1 dta2-laat2 mai5 krap4|Does this bus go to the market?|Taxi and transport|
ผมลงที่นี่ครับ|pom5 long1 tii3 nii3 krap4|I'm getting off here|Taxi and transport|
เรียกแท็กซี่ให้หน่อยได้ไหมครับ|riak3 tɛk4-sii3 hai3 nɔɔi2 dai3 mai5 krap4|Could you call a taxi for me?|Taxi and transport|
ผมมีห้องจองไว้ครับ|pom5 mii1 hɔɔng3 jɔɔng1 wai4 krap4|I have a reservation|Hotel|
มีห้องว่างไหมครับ|mii1 hɔɔng3 waang3 mai5 krap4|Do you have a vacant room?|Hotel|
ห้องคืนละเท่าไรครับ|hɔɔng3 kɯɯn1 la4 tao3-rai1 krap4|How much is the room per night?|Hotel|
ขอห้องเตียงเดี่ยวครับ|kɔɔ5 hɔɔng3 dtiang1 diao2 krap4|A single-bed room, please|Hotel|
ขอห้องเตียงคู่ครับ|kɔɔ5 hɔɔng3 dtiang1 kuu3 krap4|A twin-bed room, please|Hotel|
ผมจะพักสามคืนครับ|pom5 ja2 pak4 saam5 kɯɯn1 krap4|I'll stay three nights|Hotel|
เช็คอินกี่โมงครับ|chek4 in1 gii2 moong1 krap4|What time is check-in?|Hotel|
ต้องออกจากห้องกี่โมงครับ|dtɔɔng3 ɔɔk2 jaak2 hɔɔng3 gii2 moong1 krap4|What time is check-out?|Hotel|
มีไวไฟไหมครับ|mii1 wai1 fai1 mai5 krap4|Is there Wi-Fi?|Hotel|
แอร์เสียครับ|ɛɛ1 sia5 krap4|The air-conditioner is broken|Hotel|
ขอผ้าเช็ดตัวเพิ่มครับ|kɔɔ5 paa3 chet4 dtua1 pɤɤm3 krap4|May I have an extra towel?|Hotel|
ฝากกระเป๋าไว้ได้ไหมครับ|faak2 gra2-bpao5 wai4 dai3 mai5 krap4|Can I leave my bag here?|Hotel|
ผมเดินทางมาท่องเที่ยวครับ|pom5 dɤɤn1 taang1 maa1 tɔɔng3 tiao3 krap4|I'm here to travel|Airport and travel|
ผมมาทำงานครับ|pom5 maa1 tam1 ngaan1 krap4|I'm here for work|Airport and travel|
ผมจะอยู่ประเทศไทยหนึ่งสัปดาห์ครับ|pom5 ja2 yuu2 bpra2-teet3 tai1 nɯng2 sap2-daa1 krap4|I'll stay in Thailand one week|Airport and travel|
ประตูขึ้นเครื่องอยู่ที่ไหนครับ|bpra2-dtuu1 kɯn3 krɯang3 yuu2 tii3 nai5 krap4|Where is the boarding gate?|Airport and travel|
เที่ยวบินล่าช้าไหมครับ|tiao3 bin1 laa3 chaa4 mai5 krap4|Is the flight delayed?|Airport and travel|
กระเป๋าของผมหายครับ|gra2-bpao5 kɔɔng5 pom5 haai5 krap4|My luggage is lost|Airport and travel|
ผมพลาดเครื่องบินครับ|pom5 plaat3 krɯang3 bin1 krap4|I missed my flight|Airport and travel|
ผมต้องการเปลี่ยนตั๋วครับ|pom5 dtɔɔng3 gaan1 bplian2 dtua5 krap4|I want to change my ticket|Airport and travel|
ผมอยากเช่ารถครับ|pom5 yaak2 chao3 rot4 krap4|I want to rent a car|Airport and travel|
เรือไปเกาะออกกี่โมงครับ|rɯa1 bpai1 gɔ2 ɔɔk2 gii2 moong1 krap4|What time does the boat to the island leave?|Airport and travel|
ที่นั่งริมหน้าต่างได้ไหมครับ|tii3 nang3 rim1 naa3 dtaang2 dai3 mai5 krap4|Can I have a window seat?|Airport and travel|
ผมไม่สบายครับ|pom5 mai3 sa2-baai1 krap4|I'm not well|Health|woman: ฉันไม่สบายค่ะ
ผมปวดหัวครับ|pom5 bpuat2 hua5 krap4|I have a headache|Health|
ผมปวดท้องครับ|pom5 bpuat2 tɔɔng4 krap4|I have a stomachache|Health|
ผมเป็นไข้ครับ|pom5 bpen1 kai3 krap4|I have a fever|Health|
ผมไอและเจ็บคอครับ|pom5 ai1 lɛ4 jep2 kɔɔ1 krap4|I have a cough and sore throat|Health|
ผมท้องเสียครับ|pom5 tɔɔng4 sia5 krap4|I have diarrhea|Health|
ผมเวียนหัวครับ|pom5 wian1 hua5 krap4|I feel dizzy|Health|
ผมแพ้ยาครับ|pom5 pɛɛ4 yaa1 krap4|I am allergic to medicine|Health|
ผมอยากพบหมอครับ|pom5 yaak2 pop4 mɔɔ5 krap4|I want to see a doctor|Health|
ร้านขายยาอยู่ที่ไหนครับ|raan4 kaai5 yaa1 yuu2 tii3 nai5 krap4|Where is the pharmacy?|Health|
ผมรู้สึกดีขึ้นแล้วครับ|pom5 ruu4 sɯk2 dii1 kɯn3 lɛɛo4 krap4|I feel better now|Health|
ช่วยด้วยครับ|chuai3 duai3 krap4|Help!|Emergency|woman: ช่วยด้วยค่ะ
เรียกตำรวจให้หน่อยครับ|riak3 dtam1-ruat3 hai3 nɔɔi2 krap4|Please call the police|Emergency|
เรียกรถพยาบาลด่วนครับ|riak3 rot4 pa4-yaa1-baan1 duan2 krap4|Call an ambulance quickly|Emergency|
โรงพยาบาลอยู่ที่ไหนครับ|roong1 pa4-yaa1-baan1 yuu2 tii3 nai5 krap4|Where is the hospital?|Emergency|
มีไฟไหม้ครับ|mii1 fai1 mai3 krap4|There is a fire|Emergency|
ผมถูกขโมยครับ|pom5 tuuk2 ka2-mooi1 krap4|I was robbed|Emergency|
กระเป๋าสตางค์ของผมถูกขโมยครับ|gra2-bpao5 sa2-dtaang1 kɔɔng5 pom5 tuuk2 ka2-mooi1 krap4|My wallet was stolen|Emergency|
มีอุบัติเหตุครับ|mii1 u2-bat2-dti2-heet2 krap4|There has been an accident|Emergency|
ผมทำหนังสือเดินทางหายครับ|pom5 tam1 nang5-sɯɯ5 dɤɤn1-taang1 haai5 krap4|I lost my passport|Emergency|
ผมต้องการความช่วยเหลือครับ|pom5 dtɔɔng3 gaan1 kwaam1 chuai3 lɯa5 krap4|I need help|Emergency|
สถานทูตอยู่ที่ไหนครับ|sa2-taan5 tuut3 yuu2 tii3 nai5 krap4|Where is the embassy?|Emergency|
ระวังครับ|ra4-wang1 krap4|Be careful!|Emergency|
ขอเบอร์มือถือได้ไหมครับ|kɔɔ5 bɤɤ1 mɯɯ1 tɯɯ5 dai3 mai5 krap4|May I have your mobile number?|Phone and internet|woman: คะ
ผมโทรหาคุณได้ไหมครับ|pom5 too1 haa5 kun1 dai3 mai5 krap4|Can I call you?|Phone and internet|
ไม่ได้ยินครับ|mai3 dai3 yin1 krap4|I can't hear you|Phone and internet|
สัญญาณไม่ดีครับ|san5-yaan1 mai3 dii1 krap4|The signal is bad|Phone and internet|
แบตเตอรี่หมดครับ|bɛt2-dtɤɤ1-rii3 mot2 krap4|The battery is dead|Phone and internet|
ผมจะโทรกลับนะครับ|pom5 ja2 too1 glap2 na4 krap4|I'll call back|Phone and internet|
ขอรหัสผ่านไวไฟหน่อยครับ|kɔɔ5 ra4-hat2 paan2 wai1 fai1 nɔɔi2 krap4|May I have the Wi-Fi password?|Phone and internet|
ผมส่งข้อความหาคุณนะครับ|pom5 song2 kɔɔ3 kwaam1 haa5 kun1 na4 krap4|I'll send you a message|Phone and internet|
ขอไลน์ของคุณได้ไหมครับ|kɔɔ5 lai1 kɔɔng5 kun1 dai3 mai5 krap4|May I have your Line ID?|Phone and internet|
ที่นี่มีอินเทอร์เน็ตไหมครับ|tii3 nii3 mii1 in1-tɤɤ1-net4 mai5 krap4|Is there internet here?|Phone and internet|
ขอชาร์จมือถือได้ไหมครับ|kɔɔ5 chaat3 mɯɯ1 tɯɯ5 dai3 mai5 krap4|May I charge my phone?|Phone and internet|
ไปด้วยกันไหมครับ|bpai1 duai3 gan1 mai5 krap4|Shall we go together?|Social|
ผมชอบเมืองไทยมากครับ|pom5 chɔɔp3 mɯang1 tai1 maak3 krap4|I like Thailand very much|Social|
ขอบคุณที่เชิญครับ|kɔɔp2-kun1 tii3 chɤɤn1 krap4|Thank you for inviting me|Social|
ผมสนุกมากครับ|pom5 sa2-nuk2 maak3 krap4|I'm having a lot of fun|Social|
คุณพูดภาษาอังกฤษได้ไหมครับ|kun1 puut3 paa1-saa5 ang1-grit2 dai3 mai5 krap4|Do you speak English?|Social|
ผมกำลังเรียนภาษาไทยครับ|pom5 gam1-lang1 rian1 paa1-saa5 tai1 krap4|I'm learning Thai|Social|
คุณเป็นยังไงบ้างครับ|kun1 bpen1 yang1-ngai1 baang3 krap4|How have you been?|Social|
ผมเห็นด้วยครับ|pom5 hen5 duai3 krap4|I agree|Social|
สุขสันต์วันเกิดครับ|suk2 san5 wan1 gɤɤt2 krap4|Happy birthday|Social|
ขอให้มีความสุขนะครับ|kɔɔ5 hai3 mii1 kwaam1 suk2 na4 krap4|Wishing you happiness|Social|
ขอให้โชคดีครับ|kɔɔ5 hai3 chook3 dii1 krap4|Good luck|Social|
ผมทำงานบริษัทครับ|pom5 tam1 ngaan1 bɔɔ1-ri4-sat2 krap4|I work at a company|Work|
ผมมีประชุมตอนบ่ายครับ|pom5 mii1 bpra2-chum1 dtɔɔn1 baai2 krap4|I have a meeting this afternoon|Work|
วันนี้ผมทำงานจนดึกครับ|wan1 nii4 pom5 tam1 ngaan1 jon1 dɯk2 krap4|Today I work until late|Work|
ผมส่งงานพรุ่งนี้ครับ|pom5 song2 ngaan1 prung3 nii4 krap4|I'll submit the work tomorrow|Work|
ผมจะส่งเอกสารให้ครับ|pom5 ja2 song2 eek2-ga2-saan5 hai3 krap4|I'll send you the documents|Work|
ผมขอลาหยุดหนึ่งวันครับ|pom5 kɔɔ5 laa1 yut2 nɯng2 wan1 krap4|I'd like to take one day off|Work|
ผมเลิกงานห้าโมงเย็นครับ|pom5 lɤɤk3 ngaan1 haa3 moong1 yen1 krap4|I finish work at five p.m.|Work|
เจ้านายของผมใจดีครับ|jao3 naai1 kɔɔng5 pom5 jai1 dii1 krap4|My boss is kind|Work|
ผมมีเพื่อนร่วมงานที่ดีครับ|pom5 mii1 pɯan3 ruam3 ngaan1 tii3 dii1 krap4|I have good colleagues|Work|
ผมยังทำงานไม่เสร็จครับ|pom5 yang1 tam1 ngaan1 mai3 set2 krap4|I haven't finished work yet|Work|
ผมมาสัมภาษณ์งานครับ|pom5 maa1 sam5-paat3 ngaan1 krap4|I'm here for a job interview|Work|
วันนี้อากาศดีมากครับ|wan1 nii4 aa1-gaat2 dii1 maak3 krap4|The weather is very nice today|Weather|
วันนี้ร้อนมากครับ|wan1 nii4 rɔɔn4 maak3 krap4|It's very hot today|Weather|
วันนี้หนาวไหมครับ|wan1 nii4 naao5 mai5 krap4|Is it cold today?|Weather|
ฝนกำลังตกครับ|fon5 gam1-lang1 dtok2 krap4|It's raining|Weather|
พรุ่งนี้ฝนจะตกไหมครับ|prung3 nii4 fon5 ja2 dtok2 mai5 krap4|Will it rain tomorrow?|Weather|
ผมเอาร่มมาครับ|pom5 ao1 rom3 maa1 krap4|I brought an umbrella|Weather|
ฤดูฝนเริ่มแล้วครับ|rɯ4-duu1 fon5 rɤɤm3 lɛɛo4 krap4|The rainy season has started|Weather|
อากาศเย็นสบายครับ|aa1-gaat2 yen1 sa2-baai1 krap4|The weather is cool and pleasant|Weather|
แดดแรงมากครับ|dɛɛt2 rɛɛng1 maak3 krap4|The sun is very strong|Weather|
อากาศชื้นมากครับ|aa1-gaat2 chɯɯn4 maak3 krap4|The air is very humid|Weather|
เมื่อวานฝนตกหนักครับ|mɯa3 waan1 fon5 dtok2 nak2 krap4|It rained hard yesterday|Weather|
มีพายุเข้าครับ|mii1 paa1-yu4 kao3 krap4|A storm is coming in|Weather|
คุณมีแฟนหรือยังครับ|kun1 mii1 fɛɛn1 rɯɯ5 yang1 krap4|Do you have a partner yet?|Dating and friends|casual; woman: คะ
คุณน่ารักมากครับ|kun1 naa3 rak4 maak3 krap4|You are very lovely|Dating and friends|
ผมชอบคุณครับ|pom5 chɔɔp3 kun1 krap4|I like you|Dating and friends|
ผมคิดถึงคุณครับ|pom5 kit4 tɯng5 kun1 krap4|I miss you|Dating and friends|
ไปเที่ยวด้วยกันไหมครับ|bpai1 tiao3 duai3 gan1 mai5 krap4|Shall we go out together?|Dating and friends|
วันเสาร์คุณว่างไหมครับ|wan1 sao5 kun1 waang3 mai5 krap4|Are you free on Saturday?|Dating and friends|
ผมขอเลี้ยงข้าวคุณนะครับ|pom5 kɔɔ5 liang4 kaao3 kun1 na4 krap4|Let me treat you to a meal|Dating and friends|
อยากไปดูหนังด้วยกันไหมครับ|yaak2 bpai1 duu1 nang5 duai3 gan1 mai5 krap4|Want to watch a movie together?|Dating and friends|
เจอกันที่ไหนดีครับ|jɤɤ1 gan1 tii3 nai5 dii1 krap4|Where shall we meet?|Dating and friends|
ผมไปส่งคุณนะครับ|pom5 bpai1 song2 kun1 na4 krap4|I'll take you home|Dating and friends|
เราเป็นเพื่อนกันนะครับ|rao1 bpen1 pɯan3 gan1 na4 krap4|We are friends|Dating and friends|
ขอถ่ายรูปได้ไหมครับ|kɔɔ5 taai2 ruup3 dai3 mai5 krap4|May I take a photo?|Temple and culture|
ต้องถอดรองเท้าไหมครับ|dtɔɔng3 tɔɔt2 rɔɔng1 tao4 mai5 krap4|Do I need to take off my shoes?|Temple and culture|
ผมต้องแต่งตัวสุภาพครับ|pom5 dtɔɔng3 dtɛɛng2 dtua1 su2-paap3 krap4|I must dress politely|Temple and culture|
วัดนี้เปิดกี่โมงครับ|wat4 nii4 bpɤɤt2 gii2 moong1 krap4|What time does this temple open?|Temple and culture|
ค่าเข้าชมเท่าไรครับ|kaa3 kao3 chom1 tao3-rai1 krap4|How much is the entrance fee?|Temple and culture|
ผมอยากไหว้พระครับ|pom5 yaak2 wai3 pra4 krap4|I want to pay respects to the Buddha|Temple and culture|
ห้ามถ่ายรูปในนี้ใช่ไหมครับ|haam3 taai2 ruup3 nai1 nii3 chai3 mai5 krap4|Photos are not allowed in here, right?|Temple and culture|
ผมขอใส่บาตรได้ไหมครับ|pom5 kɔɔ5 sai2 baat2 dai3 mai5 krap4|May I make an alms offering?|Temple and culture|
สงกรานต์เริ่มวันไหนครับ|song5-graan1 rɤɤm3 wan1 nai5 krap4|Which day does Songkran start?|Temple and culture|
ผมยังไม่รู้ธรรมเนียมครับ|pom5 yang1 mai3 ruu4 tam1-niam1 krap4|I don't know the customs yet|Temple and culture|
ใส่เสื้อแขนยาวเข้าวัดได้ไหมครับ|sai2 sɯa3 kɛɛn5 yaao1 kao3 wat4 dai3 mai5 krap4|Can I enter the temple in a long-sleeved shirt?|Temple and culture|
วันนี้เป็นวันพระครับ|wan1 nii4 bpen1 wan1 pra4 krap4|Today is a Buddhist holy day|Temple and culture|`;
const RAW_GRAMMAR = `1|Basic word order (SVO)|S + V + O|Thai sentences follow subject, verb, object order, like English. Verbs do not change form for tense, person or number, and the subject is often dropped when clear from context.|ฉันกินข้าว=chan5 gin1 kaao3=I eat rice;;เขาอ่านหนังสือ=kao5 aan2 nang5-sɯɯ5=He reads a book;;เราดื่มน้ำ=rao1 dɯɯm2 naam4=We drink water
1|Adjectives follow nouns|N + Adj|Adjectives and descriptive words come after the noun they describe. No linking verb is needed between a noun and an adjective used as a predicate.|บ้านใหญ่=baan3 yai2=a big house;;แมวสวย=mɛɛo1 suai5=a pretty cat;;รถแดง=rot4 dɛɛng1=a red car
1|ใช่ and ไม่ใช่ (yes and no)|N + ใช่ไหม / ไม่ใช่ + N|Thai has no single word for yes or no. ใช่ confirms an identity or statement, ไม่ใช่ denies it, and ใช่ไหม asks for confirmation like a tag question.|คุณเป็นครูใช่ไหม=kun1 bpen1 kruu1 chai3 mai5=You are a teacher, right?;;ใช่ ผมเป็นครู=chai3 pom5 bpen1 kruu1=Yes, I am a teacher;;ไม่ใช่ ผมเป็นหมอ=mai3 chai3 pom5 bpen1 mɔɔ5=No, I am a doctor
1|เป็น, อยู่ and คือ|S + เป็น + N / S + อยู่ + Place / N + คือ + N|เป็น links a person to an identity or role. อยู่ says where something is or lives. คือ means is or namely and is used to define or identify things.|เขาเป็นครู=kao5 bpen1 kruu1=He is a teacher;;แม่อยู่บ้าน=mɛɛ3 yuu2 baan3=Mom is at home;;นี่คือหนังสือของฉัน=nii3 kɯɯ1 nang5-sɯɯ5 kɔɔng5 chan5=This is my book
1|Yes-no questions with ไหม|Statement + ไหม|Add ไหม at the end of a statement to make a yes-no question. Answer by repeating the verb or adjective, or with ใช่ or ไม่ใช่.|วันนี้ร้อนไหม=wan1-nii4 rɔɔn4 mai5=Is it hot today?;;คุณกินข้าวไหม=kun1 gin1 kaao3 mai5=Do you eat rice?;;อาหารอร่อยไหม=aa1-haan5 a2-rɔɔi2 mai5=Is the food tasty?
1|Question words|S + V + อะไร / ใคร / ที่ไหน / เมื่อไร / ทำไม / อย่างไร / เท่าไร|Question words stay in the position of the answer rather than moving to the front. อะไร is what, ใคร who, ที่ไหน where, เมื่อไร when, ทำไม why, อย่างไร how and เท่าไร how much.|คุณกินอะไร=kun1 gin1 a2-rai1=What do you eat?;;คุณอยู่ที่ไหน=kun1 yuu2 tii3-nai5=Where do you live?;;อันนี้เท่าไร=an1 nii4 tao3-rai1=How much is this?
1|Classifiers with numbers|N + Number + Classifier|When counting, Thai puts the noun first, then the number, then a classifier that depends on the kind of noun. ตัว is for animals, เล่ม for books and คน for people.|แมวสองตัว=mɛɛo1 sɔɔng5 dtua1=two cats;;ผมมีหนังสือสามเล่ม=pom5 mii1 nang5-sɯɯ5 saam5 lem3=I have three books;;คนสี่คน=kon1 sii2 kon1=four people
1|Possession with ของ|N (owned) + ของ + Owner|ของ marks possession, with the owned thing first and the owner after. In everyday speech ของ is often dropped when the relationship is obvious, such as บ้านฉัน.|บ้านของฉัน=baan3 kɔɔng5 chan5=my house;;รถของเขา=rot4 kɔɔng5 kao5=his car;;หนังสือของครู=nang5-sɯɯ5 kɔɔng5 kruu1=the teacher's book
1|Negation with ไม่|S + ไม่ + V / Adj|Put ไม่ directly before a verb or adjective to negate it. It is the general negative for habits, states, preferences and the present.|ผมไม่ชอบกาแฟ=pom5 mai3 chɔɔp3 gaa1-fɛɛ1=I do not like coffee;;วันนี้ไม่ร้อน=wan1-nii4 mai3 rɔɔn4=It is not hot today;;อาหารไม่อร่อย=aa1-haan5 mai3 a2-rɔɔi2=The food is not tasty
1|Having and existing with มี|S + มี + N / มี + N + Place|มี means to have and also there is or there are. Its negative is ไม่มี, which means do not have or there is no.|ผมมีเงิน=pom5 mii1 ngɤn1=I have money;;เขาไม่มีเวลา=kao5 mai3 mii1 wee1-laa1=He has no time;;บ้านมีสองห้อง=baan3 mii1 sɔɔng5 hɔɔng3=The house has two rooms
1|Polite particles ครับ and ค่ะ|Sentence + ครับ / ค่ะ / คะ|Men end polite sentences with ครับ and women with ค่ะ. Women use คะ, with a rising-high tone, for questions and when calling for attention, and ค่ะ for statements.|ขอบคุณครับ=kɔɔp2-kun1 krap4=Thank you (male speaker);;ขอบคุณค่ะ=kɔɔp2-kun1 ka3=Thank you (female speaker);;สบายดีไหมคะ=sa2-baai1 dii1 mai5 ka4=How are you? (female speaker)
1|This, that and over there|N + (Classifier) + นี้ / นั้น / โน้น|The pronouns นี่, นั่น and โน่น mean this, that and that over there. Placed after a noun and classifier as นี้, นั้น and โน้น, they work as demonstrative adjectives.|บ้านหลังนี้ใหญ่=baan3 lang5 nii4 yai2=This house is big;;นั่นอะไร=nan3 a2-rai1=What is that?;;หนังสือเล่มนั้นดี=nang5-sɯɯ5 lem3 nan4 dii1=That book is good
1|Going and coming: ไป and มา|S + ไป / มา + Place|ไป means to go away from the speaker and มา means to come toward the speaker. Unlike English, no preposition is needed before the place.|ผมไปตลาด=pom5 bpai1 dta2-laat2=I go to the market;;เขามาโรงเรียน=kao5 maa1 roong1-rian1=He comes to school;;คุณไปไหน=kun1 bpai1 nai5=Where are you going?
1|Wanting with อยาก|S + อยาก + V|อยาก means to want to and is placed before the main verb. It expresses a wish or desire rather than a need.|ผมอยากกินข้าว=pom5 yaak2 gin1 kaao3=I want to eat rice;;เขาอยากไปบ้าน=kao5 yaak2 bpai1 baan3=He wants to go home;;คุณอยากดื่มอะไร=kun1 yaak2 dɯɯm2 a2-rai1=What do you want to drink?
2|Not doing with ไม่ได้|S + ไม่ได้ + V|ไม่ได้ before a verb says that something did not happen or is not the case, mainly for past events. It contrasts with ไม่, which is used for general or habitual negation.|ผมไม่ได้กินข้าว=pom5 mai3 dai3 gin1 kaao3=I did not eat rice;;เขาไม่ได้ไปโรงเรียน=kao5 mai3 dai3 bpai1 roong1-rian1=He did not go to school;;ฉันไม่ได้ซื้อหนังสือ=chan5 mai3 dai3 sɯɯ4 nang5-sɯɯ5=I did not buy a book
2|Not yet: ยัง...ไม่|S + ยัง + ไม่ + V|ยัง before ไม่ means not yet. To ask whether something has happened, end the question with หรือยัง.|ผมยังไม่กินข้าว=pom5 yang1 mai3 gin1 kaao3=I have not eaten yet;;เขายังไม่มา=kao5 yang1 mai3 maa1=He has not come yet;;คุณกินข้าวหรือยัง=kun1 gin1 kaao3 rɯɯ5 yang1=Have you eaten yet?
2|Ongoing action with กำลัง|S + กำลัง + V|กำลัง before a verb marks an action in progress, like the English progressive. It is often combined with อยู่ at the end of the clause.|ฉันกำลังกินข้าว=chan5 gam1-lang1 gin1 kaao3=I am eating;;เขากำลังอ่านหนังสือ=kao5 gam1-lang1 aan2 nang5-sɯɯ5=He is reading a book;;แม่กำลังทำอาหาร=mɛɛ3 gam1-lang1 tam1 aa1-haan5=Mom is cooking
2|Completion with แล้ว|S + V + แล้ว|แล้ว at the end of a clause marks that something has happened or a new state has begun. It translates already, now or has become depending on context.|ผมกินข้าวแล้ว=pom5 gin1 kaao3 lɛɛo4=I have already eaten;;เขาไปแล้ว=kao5 bpai1 lɛɛo4=He has already gone;;ฝนตกแล้ว=fon5 dtok2 lɛɛo4=It has started to rain
2|Future with จะ|S + จะ + V|จะ before a verb shows a future action, an intention or a prediction. Time words like พรุ่งนี้ can be added for clarity but are not required.|พรุ่งนี้ฝนจะตก=prung3-nii4 fon5 ja2 dtok2=It will rain tomorrow;;ผมจะโทรหาคุณ=pom5 ja2 too1 haa5 kun1=I will call you;;เขาจะมาเร็ว=kao5 ja2 maa1 reo1=He will come soon
2|Past experience with เคย|S + เคย + V|เคย before a verb means have ever done something or used to do it. The negative ไม่เคย means have never.|ผมเคยไปเชียงใหม่=pom5 kɤɤi1 bpai1 chiang1 mai2=I have been to Chiang Mai;;ฉันไม่เคยกินทุเรียน=chan5 mai3 kɤɤi1 gin1 tu4-rian1=I have never eaten durian;;คุณเคยมาที่นี่ไหม=kun1 kɤɤi1 maa1 tii3-nii3 mai5=Have you been here before?
2|Just now with เพิ่ง|S + เพิ่ง + V|เพิ่ง before a verb shows an action that happened a moment ago. It is often paired with แล้ว at the end for emphasis.|ผมเพิ่งมาถึง=pom5 pɤng3 maa1 tung5=I just arrived;;เขาเพิ่งกินข้าว=kao5 pɤng3 gin1 kaao3=He just ate;;แม่เพิ่งกลับบ้าน=mɛɛ3 pɤng3 glap2 baan3=Mom just came home
2|Ability and permission with ได้|S + V + ได้ / V + ได้ไหม|ได้ after a verb means can or is able to, and also is allowed to. The negative is ไม่ได้ after the verb, and V + ได้ไหม asks for permission.|ผมพูดภาษาไทยได้=pom5 puut3 paa1-saa5 tai1 dai3=I can speak Thai;;ที่นี่จอดรถได้ไหม=tii3-nii3 jɔɔt2 rot4 dai3 mai5=Can one park here?;;ฉันว่ายน้ำไม่ได้=chan5 waai3 naam4 mai3 dai3=I cannot swim
2|Must and should: ต้อง and ควร|S + ต้อง / ควร + V|ต้อง means must or have to and ควร means should. The negative ไม่ต้อง means there is no need to, while ไม่ควร means should not.|ผมต้องไปทำงาน=pom5 dtɔɔng3 bpai1 tam1 ngaan1=I must go to work;;คุณควรพักผ่อน=kun1 kuan1 pak4-pɔɔn2=You should rest;;คุณไม่ต้องจ่าย=kun1 mai3 dtɔɔng3 jaai2=You do not have to pay
2|Comparing: กว่า, ที่สุด and เท่า|A + Adj + กว่า + B / A + Adj + ที่สุด / A + Adj + เท่า + B|กว่า after an adjective means more than, ที่สุด means the most and เท่า means as much as. The adjective always comes before these words.|เขาสูงกว่าผม=kao5 suung5 gwaa2 pom5=He is taller than me;;อาหารไทยอร่อยที่สุด=aa1-haan5 tai1 a2-rɔɔi2 tii3-sut2=Thai food is the tastiest;;ฉันสูงเท่าเขา=chan5 suung5 tao3 kao5=I am as tall as him
2|And, but and or: และ, แต่, หรือ|A + และ / แต่ / หรือ + B|และ means and, แต่ means but and หรือ means or. In speech Thai often joins nouns with กับ, meaning with, instead of และ.|ผมชอบกาแฟและชา=pom5 chɔɔp3 gaa1-fɛɛ1 lɛ4 chaa1=I like coffee and tea;;กาแฟหรือชา=gaa1-fɛɛ1 rɯɯ5 chaa1=coffee or tea?;;อาหารอร่อยแต่แพง=aa1-haan5 a2-rɔɔi2 dtɛɛ2 pɛɛng1=The food is tasty but expensive
2|Polite requests with ขอ...หน่อย|ขอ + N + หน่อย / ช่วย + V + หน่อย|หน่อย softens a request and means a little. ขอ asks for something and ช่วย asks someone to do something for you.|ขอน้ำหน่อย=kɔɔ5 naam4 nɔɔi2=Could I have some water?;;ช่วยปิดประตูหน่อย=chuai3 bpit2 bpra2-dtuu1 nɔɔi2=Please close the door;;ขอโทษครับ=kɔɔ5-toot3 krap4=Excuse me
2|Imperatives with เถอะ, สิ and อย่า|V + เถอะ / V + สิ / อย่า + V|เถอะ makes a friendly suggestion or urges someone on and สิ makes a command softer or more encouraging. อย่า placed before a verb means do not.|ไปกันเถอะ=bpai1 gan1 tɤ2=Let us go;;กินสิ=gin1 si2=Go ahead and eat;;อย่าลืมนะ=yaa2 lɯɯm1 na4=Do not forget
2|The particle ก็|S + ก็ + V|ก็ links a result to a condition, as in then, and also adds the idea of too or also. It appears in set patterns such as อะไรก็ได้, which means anything is fine.|ผมก็ชอบกาแฟ=pom5 gɔɔ3 chɔɔp3 gaa1-fɛɛ1=I like coffee too;;คุณไปฉันก็ไป=kun1 bpai1 chan5 gɔɔ3 bpai1=If you go, I will go too;;อะไรก็ได้=a2-rai1 gɔɔ3 dai3=Anything is fine
3|Relative clauses with ที่|N + ที่ + clause|ที่ links a noun to a clause that describes it, like who, which or that. The clause follows the noun, and ที่ is rarely dropped in careful speech.|ผู้หญิงที่ใส่เสื้อแดงเป็นครูของฉัน=puu3-yiing5 tii3 sai2 sɯa3 dɛɛng1 bpen1 kruu1 kɔɔng5 chan5=The woman who wears a red shirt is my teacher;;หนังสือที่ฉันซื้อแพงมาก=nang5-sɯɯ5 tii3 chan5 sɯɯ4 pɛɛng1 maak3=The book I bought is very expensive;;นี่คือร้านที่ผมชอบ=nii3 kɯɯ1 raan4 tii3 pom5 chɔɔp3=This is the shop I like
3|Conditionals with ถ้า|ถ้า + clause 1 + (ก็) + clause 2|ถ้า introduces the condition and the result follows. ก็ or แล้ว can be added at the start of the result clause, and the result often uses จะ.|ถ้าฝนตก ฉันจะอยู่บ้าน=taa3 fon5 dtok2 chan5 ja2 yuu2 baan3=If it rains, I will stay home;;ถ้าคุณไม่สบาย ควรพักผ่อน=taa3 kun1 mai3 sa2-baai1 kuan1 pak4-pɔɔn2=If you are unwell, you should rest;;ถ้ามีเวลา ผมจะไปด้วย=taa3 mii1 wee1-laa1 pom5 ja2 bpai1 duai3=If I have time, I will go too
3|Giving reasons with เพราะ|Result + เพราะ + reason / เนื่องจาก + reason + จึง + result|เพราะ means because and usually follows the result clause. เนื่องจาก is more formal and often starts the sentence, with จึง before the result.|ผมไม่ไปเพราะฝนตก=pom5 mai3 bpai1 prɔ4 fon5 dtok2=I am not going because it is raining;;เขาเหนื่อยเพราะทำงานหนัก=kao5 nɯai2 prɔ4 tam1 ngaan1 nak2=He is tired because he works hard;;เนื่องจากฝนตกหนัก รถจึงติดมาก=nɯang3-jaak2 fon5 dtok2 nak2 rot4 jɯng1 dtit2 maak3=Because of heavy rain, traffic is very bad
3|The many uses of ให้|S + ให้ + Recipient + N / V + ให้ + Person / ให้ + Person + V|ให้ means to give. After a verb it means for the benefit of someone, and before a person and a verb it means let or allow someone to do something.|แม่ให้เงินฉัน=mɛɛ3 hai3 ngɤn1 chan5=Mom gives me money;;ผมซื้อของให้แม่=pom5 sɯɯ4 kɔɔng5 hai3 mɛɛ3=I buy things for Mom;;ให้ฉันช่วย=hai3 chan5 chuai3=Let me help
3|ได้ before a verb or noun|S + ได้ + N / S + ได้ + V|ได้ placed before a noun means got or received, and before a verb it can mean got to do or did, often for a past single event. This differs from ได้ after the verb, which means ability.|ผมได้ตั๋วแล้ว=pom5 dai3 dtua5 lɛɛo4=I got the ticket;;เขาได้งานใหม่=kao5 dai3 ngaan1 mai2=He got a new job;;ฉันได้ยินเสียงเพลง=chan5 dai3-yin1 siang5 pleeng1=I hear the sound of a song
3|เลย for emphasis|Adj / V + เลย / ไม่ + V + เลย|เลย after a word adds emphasis and means really or just. In ไม่...เลย it means not at all, and after a verb it can mean immediately or just go ahead and.|ร้อนมากเลย=rɔɔn4 maak3 lɤɤi1=It is really hot;;ผมไม่รู้เลย=pom5 mai3 ruu4 lɤɤi1=I do not know at all;;ไปเลย=bpai1 lɤɤi1=Just go
3|Also and please with ด้วย|S + V + ด้วย / ช่วย + V + ด้วย|ด้วย at the end of a clause means too or also, as when joining in. In requests such as ช่วยด้วย it means please and adds urgency.|ผมไปด้วย=pom5 bpai1 duai3=I will go too;;ช่วยด้วย=chuai3 duai3=Help!;;ฉันชอบชาด้วย=chan5 chɔɔp3 chaa1 duai3=I like tea too
3|Counting occasions with ครั้ง|V + Number + ครั้ง|ครั้ง is a classifier for occasions or times. It follows a number after the verb, and ครั้งแรก means the first time.|ผมไปเมืองไทยสามครั้ง=pom5 bpai1 mɯang1 tai1 saam5 krang4=I have been to Thailand three times;;นี่เป็นครั้งแรกของฉัน=nii3 bpen1 krang4-rɛɛk3 kɔɔng5 chan5=This is my first time;;ลองอีกครั้งนะ=lɔɔng1 iik2 krang4 na4=Try once more
3|Still doing: ยัง...อยู่|S + ยัง + V + อยู่|ยัง before a verb with อยู่ after it means still. The same ยัง means not yet when it is followed by ไม่.|เขายังอยู่ที่ทำงาน=kao5 yang1 yuu2 tii3 tam1-ngaan1=He is still at work;;ฝนยังตกอยู่=fon5 yang1 dtok2 yuu2=It is still raining;;ฉันยังเรียนภาษาไทยอยู่=chan5 yang1 rian1 paa1-saa5 tai1 yuu2=I am still studying Thai
3|Serial verbs|S + V1 + V2 + (O)|Thai often strings verbs together without any linking word to show purpose, manner or sequence. A verb of motion such as ไป or มา is often added to give direction.|ผมไปซื้อของ=pom5 bpai1 sɯɯ4 kɔɔng5=I go shopping;;แม่เดินไปตลาด=mɛɛ3 dɤɤn1 bpai1 dta2-laat2=Mom walks to the market;;ผมนั่งรถไปทำงาน=pom5 nang3 rot4 bpai1 tam1-ngaan1=I go to work by car
3|Going up and down: ขึ้น and ลง|V + ขึ้น / ลง|ขึ้น means up or to rise and ลง means down or to descend. They are used as verbs and also after other verbs to show direction or change, as in prices going up.|ผมขึ้นรถเมล์=pom5 kɯn3 rot4 mee1=I get on the bus;;เขาลงที่นี่=kao5 long1 tii3-nii3=He gets off here;;ราคาขึ้นแล้ว=raa1-kaa1 kɯn3 lɛɛo4=The price has gone up
3|Both...and with ทั้ง...และ|ทั้ง + A + และ + B|ทั้ง...และ means both A and B and is used with nouns, verbs or adjectives. ทั้งวัน means all day and ทั้งหมด means all of it.|ผมชอบทั้งกาแฟและชา=pom5 chɔɔp3 tang4 gaa1-fɛɛ1 lɛ4 chaa1=I like both coffee and tea;;เขาพูดได้ทั้งภาษาไทยและภาษาอังกฤษ=kao5 puut3 dai3 tang4 paa1-saa5 tai1 lɛ4 paa1-saa5 ang1-grit2=He speaks both Thai and English;;ฝนตกทั้งวัน=fon5 dtok2 tang4 wan1=It rains all day
4|The more...the more with ยิ่ง|ยิ่ง + clause 1 + ยิ่ง + clause 2|Repeating ยิ่ง before two clauses gives a double comparative. The first clause is the cause and the second is the growing result.|ยิ่งเรียนยิ่งสนุก=ying3 rian1 ying3 sa2-nuk2=The more you study, the more fun it is;;ยิ่งกินยิ่งอร่อย=ying3 gin1 ying3 a2-rɔɔi2=The more you eat, the tastier it gets;;ยิ่งเร็วยิ่งดี=ying3 reo1 ying3 dii1=The faster, the better
4|Passive with ถูก and โดน|Subject + ถูก / โดน + (Agent) + V|ถูก marks a passive action that happens to the subject and often carries a negative or unwanted sense. โดน is the colloquial version and is common in speech.|เขาถูกหมากัด=kao5 tuuk2 maa5 gat2=He was bitten by a dog;;ฉันโดนฝน=chan5 doon1 fon5=I got caught in the rain;;กระเป๋าถูกขโมย=gra2-bpao5 tuuk2 ka2-mooi1=The bag was stolen
4|Causing with ทำให้|A + ทำให้ + B + V / Adj|ทำให้ means to cause or make something happen to someone. After it comes the person or thing affected and then the resulting verb or state.|ฝนทำให้รถติด=fon5 tam1-hai3 rot4 dtit2=The rain causes traffic jams;;ข่าวนี้ทำให้ฉันดีใจ=kaao2 nii4 tam1-hai3 chan5 dii1-jai1=This news made me happy;;ดนตรีทำให้ผมสบายใจ=don1-dtrii1 tam1-hai3 pom5 sa2-baai1-jai1=Music puts me at ease
4|Turning verbs into nouns: ความ and การ|ความ + Adj / V (state) and การ + V (action)|ความ makes abstract nouns from adjectives and mental verbs, such as ความสุข for happiness. การ makes nouns from action verbs, such as การเดินทาง for travelling.|ความสุขสำคัญมาก=kwaam1-suk2 sam5-kan1 maak3=Happiness is very important;;การอ่านสนุก=gaan1 aan2 sa2-nuk2=Reading is fun;;การเดินทางเหนื่อยมาก=gaan1 dɤɤn1-taang1 nɯai2 maak3=Travelling is very tiring
4|Worth-ing adjectives with น่า|น่า + V|น่า before a verb forms an adjective meaning worth doing or inspiring a feeling. Examples are น่ารัก for cute, น่ากลัว for scary and น่าสนใจ for interesting.|แมวตัวนี้น่ารักมาก=mɛɛo1 dtua1 nii4 naa3-rak4 maak3=This cat is very cute;;หนังเรื่องนี้น่ากลัว=nang5 rɯang3 nii4 naa3-glua1=This movie is scary;;หนังสือเล่มนี้น่าสนใจ=nang5-sɯɯ5 lem3 nii4 naa3-son5-jai1=This book is interesting
4|Heart compounds with ใจ|ใจ + Adj / Adj + ใจ|Thai expresses many feelings and traits with ใจ, which means heart or mind. When ใจ comes first it describes character, and when it comes last it describes a feeling.|ฉันดีใจที่ได้พบคุณ=chan5 dii1-jai1 tii3 dai3 pop4 kun1=I am glad to meet you;;เขาใจดีมาก=kao5 jai1-dii1 maak3=He is very kind;;ใจเย็นๆ นะ=jai1-yen1 yen1 na4=Stay calm
4|Keeping and setting aside with ไว้|V + ไว้|ไว้ after a verb shows that something is kept, saved or done in advance for later. It often appears with verbs like เก็บ, จอง and ฝาก.|ผมเก็บเงินไว้=pom5 gep2 ngɤn1 wai4=I am saving the money;;ฝากกระเป๋าไว้ที่นี่ได้ไหม=faak2 gra2-bpao5 wai4 tii3-nii3 dai3 mai5=Can I leave my bag here?;;ผมจองโต๊ะไว้แล้ว=pom5 jɔɔng1 dto4 wai4 lɛɛo4=I have already reserved a table
4|Repetition mark ๆ|Word + ๆ|The mark ๆ repeats the word before it. It can make nouns plural, soften or intensify adjectives, or make adverbs and requests sound gentler.|พูดช้าๆ หน่อย=puut3 chaa4 chaa4 nɔɔi2=Please speak slowly;;เด็กๆ กำลังเล่น=dek2 dek2 gam1-lang1 len3=The children are playing;;ผมชอบอาหารเผ็ดๆ=pom5 chɔɔp3 aa1-haan5 pet2 pet2=I like somewhat spicy food
4|Pronouns and politeness levels|Pronoun by status + particle|Thai chooses pronouns by speaker, age and relationship. Kinship words like พี่ for an older person, น้อง for a younger person and คุณครู for a teacher are often used in place of you or I.|พี่คะ ขอน้ำหน่อยค่ะ=pii3 ka4 kɔɔ5 naam4 nɔɔi2 ka3=Excuse me, could I have some water?;;น้องชอบกินขนมไหม=nɔɔng4 chɔɔp3 gin1 ka2-nom5 mai5=Do you like eating sweets?;;คุณครูครับ ผมขอถามหน่อย=kun1-kruu1 krap4 pom5 kɔɔ5 taam5 nɔɔi2=Teacher, may I ask something?
4|Although and even if: แม้|แม้ (ว่า) + clause 1 + ก็ + clause 2|แม้ or แม้ว่า introduces a concession, meaning even if or although, and ก็ often begins the main clause. ถึงแม้ is a slightly stronger form.|แม้ฝนตก ผมก็ไป=mɛɛ4 fon5 dtok2 pom5 gɔɔ3 bpai1=Even if it rains, I will go;;แม้ว่าเขาจะเหนื่อย เขาก็ยังทำงาน=mɛɛ4-waa3 kao5 ja2 nɯai2 kao5 gɔɔ3 yang1 tam1-ngaan1=Although he is tired, he still works;;ถึงแม้อากาศร้อน ผมก็ชอบทะเล=tung5-mɛɛ4 aa1-gaat2 rɔɔn4 pom5 gɔɔ3 chɔɔp3 ta4-lee1=Even though the weather is hot, I like the sea`;
const RAW_IDIOMS = `ใจเย็น|jai1 yen1|cool heart|stay calm; be patient|1
ไม่เป็นไร|mai3 bpen1 rai1|not be anything|never mind; it's okay; no problem|1
สู้ๆ|suu3 suu3|fight fight|keep it up; good luck; hang in there|1
ใจร้อน|jai1 rɔɔn4|hot heart|impatient; hot-tempered|1
ใจดี|jai1 dii1|good heart|kind; kind-hearted|1
ใจกว้าง|jai1 gwaang3|wide heart|generous; open-minded|2
ใจแคบ|jai1 kɛɛp3|narrow heart|narrow-minded; petty|2
ใจดำ|jai1 dam1|black heart|heartless; mean|2
ใจสู้|jai1 suu3|fighting heart|determined; plucky|2
หน้าด้าน|naa3 daan3|numb face|shameless; thick-skinned|2
ปากแข็ง|bpaak2 kɛng5|hard mouth|stubborn about admitting something; refusing to admit|2
ปากหวาน|bpaak2 waan5|sweet mouth|sweet-talking; flattering|2
หัวแข็ง|hua5 kɛng5|hard head|stubborn; headstrong|2
มือใหม่|mɯɯ1 mai2|new hand|beginner; newbie|2
อกหัก|ok2 hak2|broken chest|heartbroken|2
ช่างมัน|chaang3 man1|let it be|forget it; never mind|2
ทำใจ|tam1 jai1|make the heart|to steel oneself; to come to terms with something|3
เกรงใจ|greeng1 jai1|fear the heart|to be considerate; to hesitate to impose on someone|3
ช้าๆ ได้พร้าเล่มงาม|chaa4 chaa4 dai3 praa4 lem3 ngaam1|slowly slowly get a fine knife|slow and steady wins; patience brings good results|2
น้ำขึ้นให้รีบตัก|naam4 kɯɯn3 hai3 riip3 dtak2|when the water rises, scoop it quickly|seize the opportunity while it lasts|2
ปลาหมอตายเพราะปาก|bplaa1 mɔɔ5 dtaai1 prɔ4 bpaak2|the climbing perch dies because of its mouth|a loose tongue gets you in trouble|3
ลูกไม้หล่นไม่ไกลต้น|luuk3 mai4 lon2 mai3 glai1 dton3|the fruit falls not far from the tree|like father, like son|2
ขี่ช้างจับตั๊กแตน|kii2 chaang4 jap2 dtak4-ga2-dtɛɛn1|ride an elephant to catch a grasshopper|use too much effort on a trivial task|3
น้ำพึ่งเรือ เสือพึ่งป่า|naam4 pɯng3 rɯa1 sɯa5 pɯng3 bpaa2|water depends on the boat, the tiger depends on the forest|people need each other to thrive|4
ไม้ใกล้ฝั่ง|mai4 glai3 fang2|a log near the shore|near the end of life; old and close to death|3
หนีเสือปะจระเข้|nii5 sɯa5 bpa2 jɔɔ1-ra2-kee3|flee the tiger and meet a crocodile|out of the frying pan into the fire|3
ไก่ได้พลอย|gai2 dai3 plɔɔi1|a chicken gets a gem|pearls before swine; a gift wasted on someone who cannot appreciate it|3
ตีวัวกระทบคราด|dtii1 wua1 gra2-top4 kraat3|hit the ox to strike the harrow|to criticize one person indirectly to hit another|4
ขายผ้าเอาหน้ารอด|kaai5 paa3 ao1 naa3 rɔɔt3|sell the cloth to save face|to sacrifice something to save face or get out of trouble|4
น้ำนิ่งไหลลึก|naam4 ning3 lai5 lɯk4|still water runs deep|quiet people can be deep or dangerous|3
รักวัวให้ผูก รักลูกให้ตี|rak4 wua1 hai3 puuk2 rak4 luuk3 hai3 dtii1|if you love your cow, tie it up; if you love your child, discipline them|spare the rod and spoil the child; love requires discipline|4
ทำดีได้ดี ทำชั่วได้ชั่ว|tam1 dii1 dai3 dii1 tam1 chua3 dai3 chua3|do good, get good; do evil, get evil|you reap what you sow|2
น้ำหยดลงหินทุกวัน หินมันยังกร่อน|naam4 yot2 long1 hin5 tuk4 wan1 hin5 man1 yang1 gron2|water dripping on stone every day wears the stone away|persistence pays off|4
อดเปรี้ยวไว้กินหวาน|ot2 bpriao3 wai4 gin1 waan5|go without sour to eat sweet later|endure hardship now for later reward|3
ใกล้เกลือกินด่าง|glai3 glɯa1 gin1 daang2|near salt yet eating lye|overlooking the good thing close by|4
หนักเอาเบาสู้|nak2 ao1 bao1 suu3|take on the heavy, fight the light|face hardship bravely and work hard|3
เข้าเมืองตาหลิ่วต้องหลิ่วตาตาม|kao3 mɯang1 dtaa1 liu2 dtɔɔng3 liu2 dtaa1 dtaam1|in a land of squinters, squint along|when in Rome, do as the Romans do|4
ผักชีโรยหน้า|pak2 chii1 rooi1 naa3|sprinkle coriander on top|a superficial effort that only looks good on the surface|3
ตาบอดคลำช้าง|dtaa1 bɔɔt2 klam1 chaang4|blind people feeling an elephant|seeing only part of the whole picture|3
ปิดทองหลังพระ|bpit2 tɔɔng1 lang5 pra4|put gold leaf on the back of the Buddha image|do good deeds quietly without seeking credit|3
น้ำท่วมปาก|naam4 tuam3 bpaak2|water floods the mouth|unable to speak out, as if silenced|3
กำปั้นทุบดิน|gam1 bpan3 tup4 din1|a fist pounding the ground|a pointless answer that states the obvious|4
เสือซ่อนเล็บ|sɯa5 sɔɔn3 lep4|a tiger hides its claws|to hide one's real ability|3
ขวานผ่าซาก|kwaan5 paa2 saak3|an axe splitting a carcass|blunt and straight to the point|4
วัวหายล้อมคอก|wua1 haai5 lɔɔm4 kɔɔk3|fence the pen after the cow is lost|to act only after the damage is done|3
น้ำเชี่ยวอย่าขวางเรือ|naam4 chiao3 yaa2 kwaang5 rɯa1|do not block the boat in swift water|do not resist a strong force; go with the flow|4
กระต่ายตื่นตูม|gra2-dtaai2 dtɯɯn2 dtuum1|the rabbit startled by a thud|to panic over nothing|3
กบในกะลา|gop2 nai1 ga2-laa1|a frog in a coconut shell|narrow-minded due to limited experience|3
พูดไปสองไพเบี้ย นิ่งเสียตำลึงทอง|puut3 bpai1 sɔɔng5 pai1 bia3 ning3 sia5 dtam1-lɯng1 tɔɔng1|speaking is worth two small coins, silence a gold tael|silence is golden|4
ไฟในอย่านำออก|fai1 nai1 yaa2 nam1 ɔɔk2|do not bring the inner fire out|do not air your family's troubles in public|4
ตัดไม้ข่มนาม|dtat2 mai4 kom2 naam1|cut wood to overpower the name|to intimidate an opponent before the contest|4
เกลือจิ้มเกลือ|glɯa1 jim3 glɯa1|dip salt in salt|fight fire with fire|4
ฟ้าหลังฝน|faa4 lang5 fon5|sky after rain|things get better after hardship|2
รักพี่เสียดายน้อง|rak4 pii3 sia5-daai1 nɔɔng4|love the elder, regret the younger|torn between two choices|3
เข็นครกขึ้นภูเขา|ken5 krok4 kɯɯn3 puu1-kao5|push a mortar up a mountain|an extremely hard, uphill task|4
กินปูนร้อนท้อง|gin1 bpuun1 rɔɔn4 tɔɔng4|eat lime and feel hot in the belly|a guilty conscience makes you uneasy|4
หน้าไหว้หลังหลอก|naa3 wai3 lang5 lɔɔk2|a wai to your face, deceit behind your back|two-faced|3
สีซอให้ควายฟัง|sii5 sɔɔ1 hai3 kwaai1 fang1|play the fiddle for a buffalo|talk to someone who cannot understand or appreciate it|3
ขว้างงูไม่พ้นคอ|kwaang3 nguu1 mai3 pon4 kɔɔ1|throw a snake and it does not clear your neck|bring trouble back upon yourself|4
น้ำลดตอผุด|naam4 lot4 dtɔɔ1 put2|when the water recedes, stumps appear|the truth is revealed once the situation settles|4`;
const RAW_FACTS = `Origin of the script|Tradition credits King Ramkhamhaeng of Sukhothai with creating the Thai script in 1283, adapting older Khmer and Indic writing. Thai has been written left to right ever since.|script
44 consonant letters|Thai has 44 consonant letters but only about 21 distinct initial consonant sounds, so several letters share one sound, such as ส ศ ษ and ท ธ ถ.|script
Three consonant classes|Every consonant belongs to the mid, high or low class, and the class is the key to working out a syllable's tone. Learn each letter's class together with its shape.|script
Tone marks|Thai has four tone marks: ไม้เอก ่, ไม้โท ้, ไม้ตรี ๊ and ไม้จัตวา ๋. The last two are rare and appear mostly in loanwords and onomatopoeia.|script
Why five tones|Thai is a tonal language, so pitch changes the meaning of a word. The five tones are mid, low, falling, high and rising, and ไม่ใช่ใหม่ is a classic test of telling them apart.|language
No spaces between words|Thai is written without spaces between words. Spaces mostly mark the end of a phrase or sentence, which is why reading Thai means learning to spot word boundaries.|script
No capital letters|The Thai script has no capital letters, so names and sentence starts look like any other text. Context and the spaces between clauses do the work.|script
Vowels go around consonants|Thai vowels can be written before, after, above, below or around the consonant they follow in speech. For example, the vowel in เก is written before ก but pronounced after it.|script
Final consonants|Many consonant letters at the end of a syllable collapse into just three stop sounds, k, t and p, plus the nasals ng, n and m. For example, the final ด and ส in รส are both read as t.|language
No plurals or tenses|Thai verbs do not change for tense, person or number. Time words such as เมื่อวาน and พรุ่งนี้, or particles such as แล้ว, carry that meaning instead.|language
Polite particles|Men end polite sentences with ครับ and women with ค่ะ, or คะ in questions. Adding them makes speech sound polite, and they are often the whole answer to a yes-no question.|language
Question particle ไหม|Adding ไหม to the end of a statement turns it into a yes-no question, as in คุณหิวไหม. You answer by repeating the verb, with or without ไม่.|language
Classifiers|Thai uses classifiers when counting, so you say the noun, the number, then the classifier, as in แมวสองตัว. Common ones are ตัว for animals, คน for people and อัน for small things.|language
Reduplication with ๆ|The symbol ๆ, called ไม้ยมก, repeats the word before it. It can make a plural such as เด็กๆ, soften an adjective, or intensify a word, as in ช้าๆ for slowly.|language
Royal vocabulary|Thai has a special register called ราชาศัพท์ used when speaking about the royal family and monks. For example, กิน becomes เสวย for royalty and ฉัน for monks.|culture
Nicknames|Most Thais have a short nickname, called ชื่อเล่น, that they use in daily life, often only a syllable or two. Official given names are long and used mainly in documents.|culture
Thai surnames|Family names became mandatory in 1913 under King Vajiravudh, so Thai surnames are a relatively recent invention. Thais call each other by first name or nickname, even in formal settings, usually with คุณ in front.|culture
Buddhist Era year|Thailand officially uses the Buddhist Era, which is 543 years ahead of the Christian calendar. So 2026 is พ.ศ. 2569, and you will see this year on documents and receipts.|culture
Thai digits|Thai has its own digits, ๐ ๑ ๒ ๓ ๔ ๕ ๖ ๗ ๘ ๙. Arabic digits are more common in daily life, but Thai digits still appear on government documents and some signs.|script
Month names|Thai month names end in คม for 31-day months, ยน for 30-day months, and กุมภาพันธ์ is February. Knowing the endings helps you remember how many days each month has.|tips
Colours of the weekdays|Each day of the week has a traditional colour: Sunday red, Monday yellow, Tuesday pink, Wednesday green, Thursday orange, Friday blue and Saturday purple. Many Thais wear the colour of their birthday or the king's.|culture
The wai|The wai, or ไหว้, is a greeting made by pressing the palms together near the chest or face. A younger or lower-status person wais first, and the height of the hands shows respect.|culture
Heads and feet|In Thai culture the head is the highest part of the body and the feet the lowest. Avoid touching someone's head, and avoid pointing your feet at people or at Buddha images.|culture
Kinship words as pronouns|Thais often address people with family words such as พี่ for an older sibling and น้อง for a younger one, even for strangers. Using them is friendly and more natural than using คุณ every time.|tips
The number 555|Thai texters write 555 to mean laughing, because the word for five, ห้า, is pronounced haa. The more fives, the bigger the laugh.|culture
Abbreviation marks|The sign ฯ shows that a long word has been shortened, as in กรุงเทพฯ for Bangkok. ฯลฯ means "et cetera" and is read as และอื่นๆ.|script
The Kedmanee keyboard|The standard Thai keyboard layout is called Kedmanee. It has a normal layer and a shifted layer, because 44 consonants, vowels and tone marks cannot fit on one layer.|tips
Learn the alphabet by the song|Each Thai consonant has a traditional example word, such as ก ไก่ for chicken and ข ไข่ for egg. Reciting the alphabet with those words is the standard way Thai children learn it.|tips
Bangkok's full name|The ceremonial name of Bangkok begins กรุงเทพมหานคร and is one of the longest place names in the world. Thais usually shorten it to กรุงเทพ.|culture
Mai pen rai|ไม่เป็นไร means never mind or it's okay and is one of the most useful phrases in Thai. It reflects the cultural value of staying calm and avoiding conflict, called ใจเย็น.|tips`;
