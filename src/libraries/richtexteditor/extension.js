
import { Blockquote } from "@tiptap/extension-blockquote";
import { Bold } from "@tiptap/extension-bold";
import { BulletList } from "@tiptap/extension-bullet-list";
import { Code } from "@tiptap/extension-code";
import { CodeBlock } from "@tiptap/extension-code-block";
import { Document } from "@tiptap/extension-document";
import { Dropcursor } from "@tiptap/extension-dropcursor";
import { Gapcursor } from "@tiptap/extension-gapcursor";
import { HardBreak } from "@tiptap/extension-hard-break";
import { History } from "@tiptap/extension-history";
import { Italic } from "@tiptap/extension-italic";
import { Link } from "@tiptap/extension-link";
import { ListItem } from "@tiptap/extension-list-item";
import { OrderedList } from "@tiptap/extension-ordered-list";
import { Paragraph } from "@tiptap/extension-paragraph";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Strike } from "@tiptap/extension-strike";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableRow } from "@tiptap/extension-table-row";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style"
import { Text } from "@tiptap/extension-text";
import { Highlight } from "@tiptap/extension-highlight"
import { HorizontalRule } from "@tiptap/extension-horizontal-rule"
import { FontFamily } from "@tiptap/extension-font-family"
import {
    HeadingWithAnchor,
    LinkBubbleMenu,
    LinkBubbleMenuHandler,
    MenuButtonAddTable,
    MenuButtonBlockquote,
    MenuButtonBold,
    MenuButtonBulletedList,
    MenuButtonCode,
    MenuButtonCodeBlock,
    MenuButtonEditLink,
    MenuButtonItalic,
    MenuButtonOrderedList,
    MenuButtonStrikethrough,
    MenuButtonTextColor,
    MenuButtonTaskList,
    MenuControlsContainer,
    MenuDivider,
    MenuButtonImageUpload,
    MenuSelectHeading,
    ResizableImage,
    TableBubbleMenu,
    TableImproved,
    MenuSelectFontSize,
    FontSize,
    MenuButtonHighlightColor,
    MenuButtonUndo,
    MenuButtonRedo,
    MenuButtonHorizontalRule,
    MenuSelectFontFamily,
} from "mui-tiptap";

export const CustomLinkExtension = Link.extend({
    inclusive: false,
});

export const extensions = [
    // We use some but not all of the extensions from
    // https://tiptap.dev/api/extensions/starter-kit, plus a few additional ones

    // Note that the Table extension must come before other nodes. See README
    TableImproved.configure({
        resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,
    FontSize,
    FontFamily,
    BulletList,
    CodeBlock,
    Document,
    HardBreak,
    ListItem,
    OrderedList,
    Paragraph,
    Text,
    Color,
    Highlight,
    HorizontalRule,
    // Blockquote must come after Bold, since we want the "Cmd+B" shortcut to
    // have lower precedence than the Blockquote "Cmd+Shift+B" shortcut. See
    // README
    Bold,
    Blockquote,
    TextStyle,
    Code,
    Italic,
    Strike,
    CustomLinkExtension.configure({
        autolink: true,
        linkOnPaste: true,
        openOnClick: true,
    }),
    LinkBubbleMenuHandler,
    // Extensions
    Gapcursor,
    HeadingWithAnchor.configure({
        // People shouldn't typically need more than 3 levels of headings, so
        // keep a more minimal set (than the default 6) to keep things simpler
        // and less chaotic.
        levels: [1, 2, 3, 4, 5, 6, 7, 8],
    }),

    ResizableImage,

    // When images are dragged, we want to show the "drop cursor" for where they'll
    // land
    Dropcursor,

    TaskList,
    TaskItem.configure({
        nested: true,
    }),

    Placeholder.configure({
        placeholder: "Add your own content here...",
    }),

    // We use the regular `History` (undo/redo) extension when not using
    // collaborative editing
    History,
]

export const editors = <>
    <LinkBubbleMenu />
    <TableBubbleMenu />
</>

export const controls = (
    <MenuControlsContainer>
        <MenuSelectHeading />
        <MenuSelectFontSize />
        <MenuDivider />
        <MenuButtonBold />
        <MenuButtonItalic />
        <MenuButtonStrikethrough />
        <MenuSelectFontFamily options={[
            { label: "Arial", value: "arial" },
            { label: "Monospace", value: "monospace" },
            { label: "Serif", value: "serif" },
            { label: "Cursive", value: "cursive" },
        ]} />
        <MenuButtonTextColor aria-label="Rich Text Input Text Color"
            defaultTextColor="#000"
            swatchColors={[
                { value: '#000000', label: 'Black' },
                { value: '#ffffff', label: 'White' },
                { value: '#888888', label: 'Grey' },
                { value: '#ff0000', label: 'Red' },
                { value: '#ff9900', label: 'Orange' },
                { value: '#ffff00', label: 'Yellow' },
                { value: '#00d000', label: 'Green' },
                { value: '#0000ff', label: 'Blue' }]}
        />
        <MenuButtonHighlightColor
            swatchColors={[
                { value: "#595959", label: "Dark grey" },
                { value: "#dddddd", label: "Light grey" },
                { value: "#ffa6a6", label: "Light red" },
                { value: "#ffd699", label: "Light orange" },
                // Plain yellow matches the browser default `mark` like when using Cmd+Shift+H
                { value: "#ffff00", label: "Yellow" },
                { value: "#99cc99", label: "Light green" },
                { value: "#90c6ff", label: "Light blue" },
                { value: "#8085e9", label: "Light purple" },
            ]}
        />
        <MenuDivider />
        <MenuButtonEditLink />
        <MenuButtonHorizontalRule />
        <MenuDivider />
        <MenuButtonOrderedList />
        <MenuButtonBulletedList />
        <MenuButtonTaskList />
        <MenuDivider />
        <MenuButtonBlockquote />
        <MenuDivider />
        <MenuButtonCode />
        <MenuButtonCodeBlock />
        <MenuDivider />
        <MenuButtonImageUpload
            onUploadFiles={(files) =>
                files.map((file) => ({
                    src: URL.createObjectURL(file),
                    alt: file.name,
                }))} />
        <MenuButtonAddTable />
        <MenuDivider />
        <MenuButtonUndo />
        <MenuButtonRedo />
    </MenuControlsContainer>
)