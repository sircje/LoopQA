export interface TestCase {
    name: string;
    project: "Web Application" | "Mobile Application";
    task: string;
    column: "To Do" | "In Progress" | "Done";
    tags: string[];
}