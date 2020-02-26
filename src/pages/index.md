---
title: Home
sections:
  - component: HeroBlock
    content: |

      We design & build websites that convert visitors into paying customers
    section_id: hero
    title: Creating better human experiences through exceptional web design
    type: heroblock
  - component: PortfolioBlock
    layout_style: mosaic
    num_projects_displayed: 6
    section_id: latest-projects
    subtitle: An optional subtitle of the section
    title: Recent Work
    type: portfolioblock
    view_all_text: View All
    view_all_url: portfolio/index.html
  - component: ServicesBlock
    section_id: services
    serviceslist:
      - content: "We ask the right questions to understand the business you're building and the people you’re building it for.\r\n"
        title: Strategy
      - content: >-
          Web design can make or break a business. We design thoughtful
          experiences that are centered around people’s wants and needs.
        title: Design
      - content: "We create interactive prototypes for usability testing that informs our design process and brings ideas into the hands of real people.\r\n"
        title: Prototyping
      - content: "Our full-stack development team knows how to code intuitive, native applications for mobile, desktop, and the web.\r\n"
        title: Development
    subtitle: We’re a creative partner offering only what we do best.
    title: What We Do
    type: servicesblock
  - component: TestimonialsBlock
    section_id: testimonials
    subtitle: An optional subtitle of the section
    testimonialslist:
      - author: John Doe
        avatar: images/john_doe.jpg
        content: >-
          Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis
          nunc non interdum. Pellentesque tortor ligula, gravida ac commodo eu.
      - author: Jane Roe
        avatar: images/jane_roe.jpg
        content: >-
          Sed laoreet magna commodo libero euismod sodales. Nunc ac libero
          convallis, interdum ligula vel, pretium diam. Integer commodo sem at
          dui sollicitudin, vel posuere justo laoreet.
    title: Testimonials
    type: testimonialsblock
  - actions:
      - label: View Blog
        url: blog/index.html
    component: PostsBlock
    num_posts_displayed: 2
    section_id: latest-posts
    subtitle: An optional subtitle of the section
    title: Latest from the Blog
    type: postsblock
  - component: ContactBlock
    section_id: contact
    subtitle: An optional subtitle of the section
    title: Contact Us
    type: contactblock
menus:
  main:
    title: Home
    weight: 1
template: home
---

