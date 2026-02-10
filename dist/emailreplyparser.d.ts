import type { ParseOptions } from "./parser/emailparser.js";
/**
 * EmailReplyParser
 */
declare class EmailReplyParser {
    /**
     * Parse an email
     */
    read(text: string, options?: ParseOptions): import("./email.js").default;
    /**
     * Parse a reply
     */
    parseReply(text: string, options?: ParseOptions): string;
    /**
     * Parse a replied email
     */
    parseReplied(text: string, options?: ParseOptions): string;
}
export default EmailReplyParser;
