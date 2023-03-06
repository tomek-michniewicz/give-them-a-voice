# Give Them a Voice

This project was created during [Avanade International Women's Day Hackathon](https://avanade-iwd.devpost.com/) in March 2023.

## Project description

### Idea

The inspiration for this project was a podcast with Siddharth Kara - an author of "Cobalt Red: How The Blood of The Congo Powers Our Lives".

There is an untold story of poverty, exploitation and human tragedy in Congo, happening right now. There are people, many of them women, young women and kids, living and working in sub-human conditions.

>"An increasing number of women, girls, and boys live in these [mining] camps and work at the mining sites throughout all stages of the operating process. The living conditions of these camps are inhumane and the human rights violations are extensive. There is no safe access to water, food, education, and health, including sexual and reproductive health. Women often engage in the most toxic job at the mining sites: “droumage” - crushing, sorting, washing, processing, and/or selling minerals."

As this hackathon theme is "taking action" and is organized in the month of "International Women's Day" - I wanted to explore the question if A-powered solution could, at least in  some small way, help with this very complicated problem and therefore improve at least a  bit the quality of life of many women that live in those kind of environment today.

#### Internet sources

- https://www.npr.org/sections/goatsandsoda/2023/02/01/1152893248/red-cobalt-congo-drc-mining-siddharth-kara
- https://www.peacewomen.org/resource/case-study-corporations-peace-and-gender-equality-drc
- https://wilpf.org/wp-content/uploads/2016/10/WomenInArtisanalMinesInDRC_web.pdf
- https://www.youtube.com/watch?v=Hmqf0L52rD8

## Demo

Client part: https://give-them-a-voice-client.web.app

Hub part: https://give-them-a-voice.web.app

TODO: video

### Screenshots

![hub](https://firebasestorage.googleapis.com/v0/b/give-them-a-voice.appspot.com/o/2023-03-05%2021_50_27-Give%20Them%20a%20Voice%20-%20Hub.png?alt=media&token=4a3380c4-1144-44d9-9429-1581101f8ba4)

![client](https://firebasestorage.googleapis.com/v0/b/give-them-a-voice.appspot.com/o/2023-03-05%2021_50_13-Give%20Them%20a%20Voice%20-%20User.png?alt=media&token=01432557-9840-4519-aea4-17616ea1b277)
## Problem

There are two sides that are the focus of this project: people that need help and organizations that could provide aid.

### What people need

- to be heard
- to have hope that their current condition can improve
- overcome and inability to act, feel that there are some actions possible (many times people don't know how or what to do, they believe any action is hopeless - especially those against corrupt government, military, gangs, etc.)
- a way to find help and share their stories

### What organizations need

- better insights of what kind of problem people have and where
- many NGOs, health providers, etc. are understaffed and have very limited financial resources - so the bottleneck may be with processing all the inquires from the people (as it is done manually with limited amount of people)

## Solution

This project is exploring a question: does using AI could help with people being heard and meaningful actions being taken.

The are two parts of the solution: client and hub. Please look at the "Demo" section for links and examples.

### Client app

- record a person's story and send it to the hub
- hub automatically transcribe it into text (AI), could also translate, if needed
- optionally, based on the transcription and the knowledge base of the hub, a person could get an automated feedback: meaningful actions, contact information for aid providers, etc. (powered by chat and embeddings AI)

### Hub app

- keeps the transcriptions of the voice recordings send by people
- allows to run multiple analysis on every transcription. Some of them can be done automatically right after the transcript is ready and actions could be automatically taken (ie. sending messages, notifying the right people, etc.)
- as analysis are simply a questions in natural language for the chat AI, anyone could easily add them and not special technology knowledge is required
- hub can keep the knowledge base of the previous actions taken, useful contact information, etc. that grows over time, so the requests could be better served and providing aid could be more efficient

### How the system works

TODO: diagram


## Links

- https://avanade-iwd.devpost.com/

- https://www.npr.org/sections/goatsandsoda/2023/02/01/1152893248/red-cobalt-congo-drc-mining-siddharth-kara
- https://www.peacewomen.org/resource/case-study-corporations-peace-and-gender-equality-drc
- https://wilpf.org/wp-content/uploads/2016/10/WomenInArtisanalMinesInDRC_web.pdf
- https://www.youtube.com/watch?v=Hmqf0L52rD8
- https://twitter.com/siddharthkara 

## Resources

### First-hand account examples used in the demo

#### Account (1)

My name is Ndeye, and I work in an artisanal cobalt mine in the Democratic Republic of Congo. I am a widow and a mother of two young children, and I have been working in the mine for the past four years to support my family.

Every day, I wake up at dawn and make my way to the mine, where I work for 12 hours straight in unsafe and hazardous conditions. The tunnels are narrow and poorly ventilated, and the risk of a cave-in is always present. We work with rudimentary tools, such as picks and shovels, and there is no safety equipment to protect us from the dust and the fumes.

As a woman, I face additional challenges in the mine. The work is physically demanding and requires a lot of strength, and I often struggle to keep up with my male colleagues. I also face harassment and discrimination from some of the male miners, who do not believe that women should be working in the mine.

Despite these challenges, I continue to work in the mine because it is the only way I can provide for my family. The pay is meager, and I often have to skip meals to make ends meet. I worry about my health and safety, and I fear that I will never be able to escape this cycle of poverty and exploitation.

Working in an artisanal cobalt mine is a daily struggle, but it is a reality for thousands of women like me in the DRC. We need better working conditions, fair pay, and protection from harassment and discrimination. We also need alternative sources of income, so we can escape the cycle of poverty and provide a better future for our children.

#### Account (2)

My name is Fatima, and I work in an artisanal cobalt mine in the Democratic Republic of Congo. I am a mother of three, and I have been working in the mine for the past three years since my husband passed away.

Every day, I wake up before sunrise to start the long walk to the mine. I work 12-hour shifts, seven days a week, in conditions that are dangerous and unhealthy. The tunnels are narrow and unstable, and there is no ventilation to protect us from the dust and fumes. I often feel dizzy and nauseous, and I worry about the long-term health effects of working in such conditions.

As a woman, I face additional challenges in the mine. Many of the men do not respect me or my female colleagues, and we are often subjected to verbal and physical harassment. There is no one to complain to or seek help from, and we are afraid to speak up for fear of losing our jobs.

The pay is also a major concern. We earn very little, and it is barely enough to feed our families. I worry about my children's future, and I fear that I will never be able to provide them with a better life.

Despite these struggles, I continue to work in the mine because I have no other choice. There are no other jobs available in my area, and I have no education or skills to pursue other opportunities. I hope that someday, things will change, and I will be able to provide my children with a better life. But for now, I have to keep working in the mine, hoping that I will make it out alive every day.

#### Medical Aid

Hi, my name is Josephine and I work in a mine in the south of Congo. I've been working there for five years, and it's not good for our health.

The mine is dangerous because we work in small tunnels with bad air, and we're around harmful chemicals and metals. We get sick a lot from breathing problems and rashes.

I don't feel well lately, and I'm worried about my health. Do you know where I can go to see a doctor? I don't have much money, and there aren't any public hospitals close by. I need to take care of myself so I can keep working and provide for my family. If you can help, I'd really appreciate it.

#### Financial Aid

My name is Esther and I work in a mine in Congo. I have two kids and I work in the mine to earn money for them. The work is tiring and dangerous. We work for a long time in small tunnels without protection. I worry about getting hurt, but I need to work to take care of my children.

I heard there are groups that can help women like me who work in the mine. Can you tell me where to find them? I want to take care of my kids without putting myself in danger every day. If you know anything, please let me know. Thank you.

#### Pollution

Hello, my name is Amina, and I live in a village near a mine in Congo. The mine is owned by a big company, and they have been polluting our water and air for years. Our crops are dying, and many of us are getting sick.

We have tried talking to the local government officials about the problem, but they haven't done anything to help us. We want to write a letter to the government to complain about the pollution and ask them to do something. Do you know how we can write a letter to the government officials? We don't have much education, and we don't know where to start.

We need help to make our voices heard. We want to protect our health and the environment for our children and grandchildren. Any information or guidance you can provide would be greatly appreciated. Thank you.