import HTMLReactParser from 'html-react-parser';
import linkifyHtml from 'linkify-html';
import he from 'he';


export const decode = (string) => he.decode(string);
export const parseHtml = (string) => HTMLReactParser(string);
export const fullStringFormat = (string) => HTMLReactParser(linkifyHtml(decode(string)));