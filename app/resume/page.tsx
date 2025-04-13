const ResumePage = () => (
  <div style={{ height: "100vh", width: "100%" }}>
    <object
      data="/resume/Sajjad_Algburi.pdf"
      type="application/pdf"
      width="100%"
      height="100%">
      <p>
        Your browser does not support PDFs.
        <a
          href="/resume/Sajjad_Algburi.pdf"
          target="_blank"
          rel="noopener noreferrer">
          Download the resume instead.
        </a>
      </p>
    </object>
  </div>
);

export default ResumePage;
