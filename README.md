# AngularAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Prerequisites

- Node.js and npm

### Installation

1. Clone the repository: `git clone git@github.com:Farzannajipour/angular-placeholder-app.git`

### Running the Project

To run the project locally, follow these steps:

1. Install the necessary dependencies by running the command: `npm install`
2. Start the development server by running the command: `ng serve`
3. Navigate to `http://localhost:4200/` in your web browser.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Answers

1. **Why is it (or isn't it) safe to use this JWT token?**
   JWT tokens in my opinion are safe to use in an application provided proper security practives are followed while using them such as ensuring they are properly signed, expiry time is short and they should not contain any sensitive information. They have a lot of benefits as:

- **Stateless**: JWTs are stateless, so the server doesn't need to store session data for authenticated users. This reduces the load on the server and allows for easy scalability in distributed systems.
- **Security**: JWTs can be digitally signed to ensure integrity and authenticity. This prevents tampering and unauthorized access to token payloads.
- **Compact**: JWTs are compact in size, making them suitable for transmission over networks with low bandwidth requirements.

2. **Describe two attack vectors bad actors might try to abuse? And how would you mitigate these vectors?**
   Two attack vectors with HTML content in messages are:

- **Cross-Site Scripting (XSS)**: XSS is a security vulnerability where attackers can inject malicious scripts into the HTML content, which can be executed by unsuspecting users' browsers. This can lead to unauthorized actions, data theft, or session hijacking. - **Prevention**: Implement input sanitization and output encoding to prevent script injection. Sanitize user-generated HTML content to remove or neutralize potentially harmful elements or scripts and set the HTTPOnly flag on cookies to prevent them from being accessed by client-side scripts
- **Cross-Site Request Forgery (CSRF)**: CSRF is a security vulnerability where attackers manipulate users into unknowingly executing unauthorized actions within their authenticated session. This occurs when malicious requests are sent from the user's browser without their consent. - **Prevention**: Implement CSRF protection mechanisms such as CSRF tokens or SameSite cookies to validate and verify the origin of requests, ensuring they come from legitimate sources.

3. **Explain the difference between mutable and immutable objects.**

- **Mutable objects**: Mutable objects can be modified after they are created. The value of a mutable object can be changed, and multiple references to the same object will reflect these changes. (e.g. lists, arrays, dictationary, etc.)
- **Immutable objects**: Immutable objects cannot be changed once they are created. Any operation that appears to modify an immutable object actually creates a new object with the desired changes.

  **What is an example of an immutable object in JavaScript**
  All the primitive type is Javascript are immutable along with string and ofcourse if an object is frozen

**What are the pros and cons of immutability?**

- **PROS**
  - Predictable and safer code
  - Easier debugging
  - Consistent code which leads to maintainable code
- **CONS**
  - More memory usage
  - Code overhead

**How can you achieve immutability in your own code?**

- Creating new objects, copying objects using techniques like spread operator
- Using functions that give out new objects/arrays rather than using those that mutate the object(e.g. map/filter)
- Using external libraries that take this overhead on themselves e.g. immer

4. **If you would have to speed up the loading of a web-application, how would you do that?**
   In general I would try these things:

- try to use CDN links if possible
- Bundle and minify the files as much as possible - less network requests and less load
- Reduce the HTTP requests if possible
- Make http requests completion shorter - using techniques like pagination and infinite scrolling in case of large set data
- Use optimised images - scale them initially, use svgs, use SPRITES which will reduce the multiple http req as well
- Lazy Loading
- caching of http requests

For Angular:

- Lazy loaded modules
- Track By in ngFors so that the whole data rows re not re-painted
- While creating pipes: make sure you use pure option so that angular caches the results of the transformation function

5. **What part of a new job do you think is more important: Hardware or Software**
   In my opinion both software and hardware of good quality are extremely important to maximise developer's performance. But if I had to choose, then would go with having a good hardware instead, because a good piece of software cannot overcome bad hardware whereas you can still manouver around in bad software if the machine has enough power to tackle it.
