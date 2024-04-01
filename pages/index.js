import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title> game development blogs  </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to  Hrdv Thoughts " />
        <p className="description">
    <p1>  Lessons learned from 10 years in the Games Industry
 26 Mar 2019 -  8 minute read
I was thinking the other day that I wish I had learned before my first job in the games industry.

Surprisingly, most of it was from working as part of a team, rather than specific areas of knowledge. Although there had been group projects during my time at university, there wasn’t much guidance about how to effectively run them or what to expect when working as part of a team.

Below are what I consider to be important lessons during my career as a games programmer.

Keep the team moving forward
Team working
During my time at EA when I was still a junior, there was a huge amount of effort ensuring that the team (which varied from 50-100 people in size) was always able to move forward and not be blocked from working on the game.

The core principles were:

Everyone is able to test their work locally and quickly.

Everyone is able to run the game at any given time and on any platform.

The game should not break, even when given bad data and all errors should be made clear to the user.

All work should be tested locally before being given to the rest of the team (e.g. through version control or builds).

Be aware of the potential impact of your work to the team and talk to them about it, especially if you are not sure.

Finding bottlenecks and issues (e.g in workflows, processes, performance drops) and raise awareness to help find a solution as a team.

Baby steps and iteration cycles
I was introduced to the concept of ‘baby steps’ at EA by my lead/mentor during my time there and it has pretty governed my approach to work since then.

At its core, it’s designing through iterative prototyping and follow these rules:

Work one small step at a time. Start with the core mechanics or the largest unknown (e.g. a control scheme) and work outwards to build up the game or feature. Move onto the next step once you have ‘finished’ or have answered the unknown.

Don’t be afraid to quickly hack something together if you want to see if something works. Feedback from something that people can play is much more important than the implementation being ‘right’. It can always be tidied once it has been proven.

Let the feedback help drive the design. Although there would be a goal or design in mind at the start, keep it as an iterative process and review/change the design regularly based on feedback from the build.

Everything is done for a reason
E.T. Atari 2600
E.T. on the Atari 2600. Why was it the 'worst game ever made'?
Every past piece of work or decision that is done or made would have been for a reason at the time. That reason may have been ‘wrong’ or no longer valid but it will exist. I found that identifying that reasoning helps with finding common ground when looking to move forward.

This may sound obvious but it is so easy to forget, especially when encountered in the middle of current work and stuff just needs to get done.

“This is dumb”, “Why is it done this way” and “This is wrong” have been said more than once by myself. Once I got into that mindset, I would start to get fixated on proving that it was ‘wrong’, potentially even trying to fix it than working on the actual task I was meant to be doing.

Once I started the mindset of find the reason or context of code via curiosity rather than irritation, it was a much smoother experience. It would often give me a common point of understanding and appreciate the decisions and/or context, which usually lead to better and more complete work from myself.

A great example is E.T on the Atari 2600. It has and still is being branded the worst game in video game history. However, once you read about the how and why the game was developed, the game mechanics that were implemented and the very short time frame that the developer had, it becomes a lot harder to call it a ‘failure’.

Another developer has since taken the game and fixed some of the gameplay issues and bugs present; it has become a lot more playable.

You don’t have to know everything
Lots of books!
With an increasing number of different engines, languages, tools, etc. to help make games, it is almost impossible to know them all from the very start and nor is it expected.

Most of the time, companies are very understanding of this and will allow some flexibility as long as you have an understanding of the fundamentals, an awareness of the other possibilities and a willingness to learn.

For some of my previous roles, I outright didn’t know the main programming language or the tool that they were using but managed to demonstrate my core knowledge and previous experience in some way.

One in particular, I passed an on-site programming test in a language I had not used before with the use of the internet to check the syntax. This was largely due to working with similar languages either in previous roles or in my spare time. They knew that it was the first time I used this language and were willing to train me on some of the nuances on the job.

I usually try to emphasise more the ‘why’ than the ‘how’ when I explain solutions to problems I get asked for this reason. The ‘whys’ are more likely to cross over to other technologies than explicit code snippets or tool specific techniques with explanation.

The user isn’t you
There’s a good chance that if you have implemented a feature, UX, UI, game mechanic, tutorial or even a how-to document, it most likely only been tested along the ‘happy path’, the path that you expected it to be used or played.

As soon as it is put into somebody else’s hands, it’s common for them to do something that you hadn’t expected someone to do. E.g. Go backwards on the race track, use two fingers on the touch screen or simply not understand what’s going on.

And this is simply because the user isn’t you. They have no idea on what the requirements were or how it should be used or played.

Anticipating the unexpected path is something that gets better with practice, but nothing beats just simply putting it in the hands of someone else or discussing the problem and proposed solution with them. They could be a co-worker or just someone random. One team even went to a local pub and brought drinks for those that would help try their game.

Use emojis and images for tone and context
Communication with emoji
Team communication can be difficult, especially as teams get bigger and/or are distributed in different locations. Communicating via text with emails, wikis, bug reports and instant messengers have become the norm.

Unfortunately, it’s very difficult to convey nuance and tone over plain text. It’s all too easy to read something in a different way to how the writer intended it and completely misunderstand.

Emojis can help a lot with tone and inject some personality.

Consider the following:

“What is it with you and Steven using long words that no-one understands?!”

“What is it with you and Steven using long words that no-one understands?! 🤣”

One could easily be taken as criticism and the other would more likely be seen as friendly banter.

A picture is worth a thousand words and GIFs, even more so. I’ve seen people trying to talk to each other on instant messaging without realising they have a different screen in mind.

An image as the first message of a conversation helps so much in establishing the context.

If all else fails and a text conversation feels like you are talking past each other, try to get on a call with them or have a face to face chat. I’ve found that most of the time, this clears up misconceptions in record time.

Wrapup
I really would like to expand on some of these in detail of some of these lessons in a future post. There are lots of juicy details and examples that I would like to share.

If you have any lessons of your own, please share them with me on twitter @yaustar. I would love to hear them!</p1>
          dev jobs  techstacks and latest news  <code>subbscribe to our blog page </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
