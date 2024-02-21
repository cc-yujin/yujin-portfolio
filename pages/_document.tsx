import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>한유진 포트폴리오</title>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"></script>
        </Head>
        <body>
          <div className="mouse__cursor"></div>
          <div className="mouse__cursor2"></div>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              const cursor = document.querySelector(".mouse__cursor");
              const cursor2 = document.querySelector(".mouse__cursor2");

              window.addEventListener("mousemove", e => {
                  gsap.to(cursor, {duration: 0.3, left: e.pageX -5, top: e.pageY -5});
                  gsap.to(cursor2, {duration: 0.8, left: e.pageX -15, top: e.pageY -15});

                  document.querySelectorAll(".mouse__text span").forEach(span => {
                      span.addEventListener("mouseenter", () => {
                          cursor.classList.add("active");
                          cursor2.classList.add("active");
                      });
                      span.addEventListener("mouseleave", () => {
                          cursor.classList.remove("active");
                          cursor2.classList.remove("active");
                      });
                  });

                  document.querySelectorAll("#header li.active").forEach(span => {
                      span.addEventListener("mouseenter", () => {
                          cursor.classList.add("active2");
                          cursor2.classList.add("active2");
                      });
                      span.addEventListener("mouseleave", () => {
                          cursor.classList.remove("active2");
                          cursor2.classList.remove("active2");
                      });
                  });

                  document.querySelectorAll("#footer").forEach(span => {
                      span.addEventListener("mouseenter", () => {
                          cursor.classList.add("active3");
                          cursor2.classList.add("active3");
                      });
                      span.addEventListener("mouseleave", () => {
                          cursor.classList.remove("active3");
                          cursor2.classList.remove("active3");
                      });
                  });
              });
            `,
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
