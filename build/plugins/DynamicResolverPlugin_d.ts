// TODO: create a pull request for @types/enhanced-resolve
import { Hook } from "tapable";
import EnhancedResolver from "enhanced-resolve/lib/Resolver";
import {
  ResolverRequest,
  ResolveContext,
  LoggingCallbackWrapper,
} from "enhanced-resolve/lib/common-types";

interface Resolver extends Omit<EnhancedResolver, "doResolve"> {
  getHook(name: string): Hook;
  ensureHook(name: string): string;
  doResolve(type: string, request: ResolverRequest, message: string | null, resolveContext: ResolveContext, callback: LoggingCallbackWrapper): any;
}

export default Resolver;
