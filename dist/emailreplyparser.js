/*
 * email-reply-parser
 *
 * Copyright 2025, Mirage AI
 * Author: Baptiste Jamin <baptiste@jam.in>
 */
/**************************************************************************
 * IMPORTS
 ***************************************************************************/
// PROJECT: LIB
import EmailParser from "./parser/emailparser.js";
/**
 * EmailReplyParser
 */
class EmailReplyParser {
    /**
     * Parse an email
     */
    read(text, options) {
        return new EmailParser().parse(text, options);
    }
    /**
     * Parse a reply
     */
    parseReply(text, options) {
        return this.read(text, options).getVisibleText();
    }
    /**
     * Parse a replied email
     */
    parseReplied(text, options) {
        return this.read(text, options).getQuotedText();
    }
}
export default EmailReplyParser;
