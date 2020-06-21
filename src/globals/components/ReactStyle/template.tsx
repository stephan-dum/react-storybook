import IReactStyleTemplate from "./template_d";

const ReactStyleTemplate: IReactStyleTemplate = ({ html }) => <style dangerouslySetInnerHTML={{__html : html }} />;

export default ReactStyleTemplate;
