import {FunctionComponent} from "preact";
// TODO: use transparent wrapper
interface IMessageProps {

}
const Message: FunctionComponent<IMessageProps> = ({ children }) => {
  return <div>{children}</div>;
};
export default Message;
