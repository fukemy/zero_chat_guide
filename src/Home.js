import React, { useRef, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import ScrollTop from './utils/ScrollTop'
import { CssBaseline, Divider, Fab, ThemeProvider, createTheme } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
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
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableRow } from "@tiptap/extension-table-row";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style"
import { Text } from "@tiptap/extension-text";
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
    MenuButtonRemoveFormatting,
    MenuButtonStrikethrough,
    MenuButtonSubscript,
    MenuButtonTextColor,
    MenuButtonSuperscript,
    MenuButtonTaskList,
    MenuControlsContainer,
    MenuDivider,
    MenuButtonImageUpload,
    MenuButtonAddImage,
    MenuSelectHeading,
    ResizableImage,
    RichTextEditor,
    TableBubbleMenu,
    TableImproved,
    MenuSelectFontSize,
    FontSize,
} from "mui-tiptap";


const pages = ['Products', 'Pricing', 'Blog']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']



const exampleContent =
    '<h2>Hey there 👋</h2><p>This is a <em>basic</em> example of using <a target="_blank" rel="noopener noreferrer nofollow" href="https://tiptap.dev/">Tiptap</a> with <a target="_blank" rel="noopener noreferrer nofollow" href="https://mui.com/">MUI (Material-UI)</a>. Sure, there are all kind of <strong>basic text styles</strong> you’d probably expect from a text editor. But wait until you see the lists:</p><ul><li><p>That’s a bullet list with one …</p></li><li><p>… or two list items.</p></li></ul><p>Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try <code>inline code</code> and a code block:</p><pre><code class="language-css">body {\n  display: none;\n}</code></pre><p></p><p>It’s only the tip of the iceberg though. Give it a try and click a little bit around. And feel free to add and resize images:</p><img height="auto" src="https://picsum.photos/600/400" alt="random image" width="350" style="aspect-ratio: 3 / 2"><p></p><p>Organize information in tables:</p><table><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Role</p></th><th colspan="1" rowspan="1"><p>Team</p></th></tr><tr><td colspan="1" rowspan="1"><p>Alice</p></td><td colspan="1" rowspan="1"><p>PM</p></td><td colspan="1" rowspan="1"><p>Internal tools</p></td></tr><tr><td colspan="1" rowspan="1"><p>Bob</p></td><td colspan="1" rowspan="1"><p>Software</p></td><td colspan="1" rowspan="1"><p>Infrastructure</p></td></tr></tbody></table><p></p><p>Or write down your groceries:</p><ul data-type="taskList"><li data-checked="true" data-type="taskItem"><label><input type="checkbox" checked="checked"><span></span></label><div><p>Milk</p></div></li><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Eggs</p></div></li><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Sriracha</p></div></li></ul><blockquote><p>Wow, that’s amazing. Good work, boy! 👏 <br>— Mom</p></blockquote><p>Give it a try!</p>';

const CustomLinkExtension = Link.extend({
    inclusive: false,
});

const CustomSubscript = Subscript.extend({
    excludes: "superscript",
});

const CustomSuperscript = Superscript.extend({
    excludes: "subscript",
});

const extensions = [
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
    BulletList,
    CodeBlock,
    Document,
    HardBreak,
    ListItem,
    OrderedList,
    Paragraph,
    CustomSubscript,
    CustomSuperscript,
    Text,
    Color,
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
        openOnClick: false,
    }),
    LinkBubbleMenuHandler,

    // Extensions
    Gapcursor,
    HeadingWithAnchor.configure({
        // People shouldn't typically need more than 3 levels of headings, so
        // keep a more minimal set (than the default 6) to keep things simpler
        // and less chaotic.
        levels: [1, 2, 3],
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
];

export default function Home(props) {
    const [anchorElNav, setAnchorElNav] = useState()
    const [anchorElUser, setAnchorElUser] = useState()

    const [htmlResult, setHtmlResult] = useState("");

    const rteRef = useRef(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static" id='appbar'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            ZeroChat
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container>
                <Toolbar id="back-to-top-anchor" />
                <RichTextEditor
                    ref={rteRef}
                    content={exampleContent}
                    extensions={extensions}
                    renderControls={() => (
                        <MenuControlsContainer>
                            <MenuSelectHeading />
                            <MenuSelectFontSize />
                            <MenuDivider />
                            <MenuButtonBold />
                            <MenuButtonItalic />
                            <MenuButtonStrikethrough />
                            <MenuButtonTextColor
                                aria-label="Rich Text Input Text Color"
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
                            <MenuButtonSubscript />
                            <MenuButtonSuperscript />
                            <MenuDivider />
                            <MenuButtonEditLink />
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
                            <MenuButtonAddImage />
                            <MenuButtonAddTable />
                            <MenuDivider />
                            <MenuButtonRemoveFormatting />
                        </MenuControlsContainer>
                    )}>
                    {() => (
                        <>
                            <LinkBubbleMenu />
                            <TableBubbleMenu />
                        </>
                    )}
                </RichTextEditor>

                <Button onClick={() => setHtmlResult(rteRef.current?.editor?.getHTML() ?? "")}>
                    Save and display HTML
                </Button>
                {htmlResult && (
                    <pre style={{ marginTop: 10, overflow: "scroll", maxWidth: "100%" }}>
                        <code>{htmlResult}</code>
                    </pre>
                )}
                {/* <Box sx={{ my: 2 }}>
                        {[...new Array(100)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </Box> */}
            </Container>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}

