import "../styles/layout/Main.scss";
import PropTypes from "prop-types";
import Form from "./Form";
import Hero from "./Hero";
import Preview from "./Preview";

function Main({ projectInfo, onChangeInput, onSubmitForm, projectImages }) {
  return (
    <main className="main">
      <Hero />

      <Preview projectInfo={projectInfo} projectImages={projectImages} />

      <Form onChangeInput={onChangeInput} onSubmitForm={onSubmitForm} />
    </main>
  );
}

export default Main;

Main.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  projectInfo: PropTypes.object.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  projectImages: PropTypes.object.isRequired,
};
