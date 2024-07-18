import React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import ScrollTop from '../utils/ScrollTop'
import { Fab, List, ListItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { maincolor } from '../utils/colors'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const exampleContent = `<div class="chart-container" style="min-height: 375px">
Đối với hệ thống Zero Chat, bạn cần thực hiện các loại thanh toán sau:
<ul>
    <li>Mua Agent: Được thực hiện khi nhấp vào nút Tạo Agent.</li>
    <li>Mua Truy vấn (giúp chatbot hoạt động): Được thực hiện khi nhấp vào nút
        Mua Truy vấn trong phần Thông tin dịch vụ khi cài đặt Agent.</li>
    <li>Nâng cấp tài khoản: Được thực hiện khi nhấp vào nút Nâng hạng trong phần
        Thông tin dịch vụ khi cài đặt Agent.</li>
</ul>
<p>
    Bạn có thể mua Agent, truy vấn hoặc nâng cấp tài khoản thông qua ví điện
    tử của mình hoặc có thể nạp tiền trước vào ví của hệ thống, sau đó trừ
    dần số tiền này trong tài khoản khi thực hiện các giao dịch. Để nạp
    tiền, nhấp chọn mục Thanh toán ở bên trái và chọn nút Nạp.
</p>
<p><strong>Đối với người dùng mới,</strong> chúng tôi khuyến khích bạn nạp tiền
    trước vào ví
    của hệ thống trong mục Thanh toán, với giá trị tối thiểu $20 - tương ứng
    với phí khởi tạo 1 Agent (1 Chatbot). Sau đó, khi bạn nhấp vào nút Tạo
    Agent, hệ thống sẽ tự trừ số tiền này và cho phép bạn tạo Agent mới.
    Thêm vào đó, khi bạn mua Agent mới, hệ thống sẽ tặng bạn 1000 truy vấn
    miễn phí. Để hiểu thêm về truy vấn, nhấp vào mục Giải thích truy vấn
    trong phần Thông tin dịch vụ ở cửa sổ cài đặt Agent. Khi hết truy vấn,
    bạn có thể mua thêm trong mục Mua truy vấn cũng ở phần Thông tin dịch
    vụ.
</p>
<p>
    Bạn có thể xem toàn bộ lịch sử nạp tiền và lịch sử giao dịch của mình
    với hệ thống trong mục Thanh toán.
</p>
<img class="vx-step-img" alt="account" src="../../images/payment/1.1.png">
</div>`

function createData(a, b, c) {
    return { a, b, c };
}
const rows = [
    createData('Cách thức hoạt động', 'Sử dụng trí tuệ nhân tạo (AI) và học máy (ML) để xử lý và tạo ra các phản hồi tự nhiên, linh hoạt.', 'Sử dụng quy tắc dựa trên mẫu hoặc kịch bản đàm thoại được lập trình sẵn.'),
    createData('Khả năng hiểu ngôn ngữ', 'Hiểu ngôn ngữ tự nhiên, ngữ cảnh và ý định của người dùng tốt hơn.', 'Khả năng hiểu ngôn ngữ hạn chế, thường chỉ hiểu các từ khóa hoặc cụm từ cụ thể.'),
    createData('Phản hồi', 'Tạo ra các phản hồi độc đáo, sáng tạo và phù hợp với từng ngữ cảnh cụ thể.', 'Cung cấp các phản hồi được lập trình sẵn, thiếu tính cá nhân hóa.'),
    createData('Ứng dụng', 'Phù hợp cho các nhiệm vụ đòi hỏi sự sáng tạo, cá nhân hóa và khả năng thích ứng cao, ví dụ như dịch vụ khách hàng, hỗ trợ sáng tạo, giáo dục.', 'Phù hợp cho các nhiệm vụ đơn giản, lặp đi lặp lại, ví dụ như cung cấp thông tin cơ bản, trả lời các câu hỏi thường gặp.'),
];

export default function Home(props) {
    const renderSection = () => {
        return <Box sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            borderRadius: 16,
        }}>
            <Box sx={{ position: 'relative' }}>
                <img src={process.env.PUBLIC_URL + '/images/zerochat_introduce.png'}
                    style={{ width: '50vh', borderRadius: 20 }}
                    alt='1' />

                <Typography style={{
                    color: maincolor,
                    fontSize: 15,
                    fontWeight: 'bold',
                    position: 'absolute',
                    top: 10,
                    left: 38
                }}>
                    GIỚI THIỆU ZERO CHAT
                </Typography>
            </Box>
            <Box>
                <img src={process.env.PUBLIC_URL + '/images/zerochat_apply.png'}
                    style={{ width: '50vh', borderRadius: 20 }}
                    alt='2' />
            </Box>
        </Box>
    }

    const renderHomeIntro = () => {
        return <Box sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Box sx={{ mr: 8 }}>
                <Typography style={{ color: maincolor, fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>
                    ZERO CHAT LÀ GÌ??
                </Typography>
                <List>
                    <ListItem sx={{ display: 'list-item', textAlign: 'center', fontFamily: 'monospace', }}>
                        Generative AI, hay AI Tạo sinh, là một lĩnh vực trong trí tuệ nhân tạo tập trung vào việc tạo ra nội dung mới từ dữ liệu đầu vào.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', textAlign: 'center', fontFamily: 'monospace', }}>
                        ZERO CHAT là một nền tảng ChatBOT tiên tiến, ứng dụng công nghệ Generative AI để cung cấp các giải pháp giao tiếp thông minh và hiệu quả. Các trợ lý ảo Chatbot AI được tạo ra bởi ZERO CHAT có khả năng giao tiếp tự nhiên và tùy chỉnh theo từng ngành nghề, giúp doanh nghiệp tối ưu hóa chiến lược tiếp thị, chăm sóc khách hàng…vv. Kết quả là doanh nghiệp có thể tăng cường khả năng cạnh tranh, nâng cao trải nghiệm khách hàng và thúc đẩy tăng trưởng bền vững.
                    </ListItem>
                </List>

                <Box sx={{ display: 'flex', width: '80vh', justifyContent: 'space-evenly', mt: 2 }}>
                    <Button h={40} sx={{
                        pl: 3,
                        pr: 3,
                        color: 'white',
                        alignSelf: 'center',
                        background: '#122A40',
                        borderRadius: 18,
                    }} endIcon={<KeyboardArrowRight />}>Xem thêm</Button>

                    <Button h={40} sx={{
                        pl: 3,
                        pr: 3,
                        color: 'white',
                        alignSelf: 'center',
                        background: '#122A40',
                        borderRadius: 18
                    }} endIcon={<KeyboardArrowRight />}>Ứng dụng của ZeroChat</Button>
                </Box>
            </Box>


            <img src={process.env.PUBLIC_URL + '/images/zerochat1.jpg'}
                style={{
                    width: '50vh',
                    height: '50vh',
                    boxShadow: `0 0 20px 20px #122A40`,
                    borderRadius: '25vh'
                }}
                alt='img_intro_page1' />
        </Box >
    }

    const renderHomeContentZeroChat = () => {
        return <Box sx={{ mt: 20 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box sx={{ justifyContent: 'center', mr: 8 }}>
                    <Typography style={{ color: maincolor, fontSize: 28, fontWeight: 'bold' }}>
                        ZERO CHAT CUNG CẤP CÁC LOẠI CHATBOT
                    </Typography>
                    <List sx={{ listStyleType: 'disc' }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <b>ChatBOT có sẵn</b>: ZERO CHAT cung cấp những ChatBOT đã được trang bị kiến thức cơ bản, cho phép người dùng sử dụng ngay lập tức mà không cần cấu hình phức tạp.
                        </ListItem>
                        <ListItem sx={{ display: 'list-item' }}>
                            <b>ChatBOT riêng biệt</b>: ZERO CHAT là một công cụ mạnh mẽ giúp người dùng tạo ra các ChatBOT AI riêng biệt. Chỉ cần nhập thông tin doanh nghiệp, chi tiết sản phẩm, quy trình bán hàng và chăm sóc khách hàng…vv, bạn sẽ có ngay một chatbot chuyên nghiệp theo ý muốn. Những ChatBOT này nắm vững nghiệp vụ kinh doanh và có thể phục vụ khách hàng hiệu quả mà không cần sự hỗ trợ từ chuyên gia công nghệ.
                        </ListItem>
                    </List>
                </Box>
                {/* <img src={process.env.PUBLIC_URL + '/images/zerochat2.png'}
                    style={{ width: '50vh', height: '50vh', borderRadius: 12 }}
                    alt='img_intro_page2' /> */}
            </Box>

            <Box sx={{ mt: 12 }}>
                <Typography style={{ color: maincolor, fontSize: 28, fontWeight: 'bold' }}>
                    ZERO CHAT KHÁC GÌ SO VỚI CÁC CHATBOT KHÁC?
                </Typography>

                <TableContainer component={Paper} sx={{ mt: 5 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ĐẶC ĐIỂM</TableCell>
                                <TableCell align="center" >ZERO CHAT (CHATBOT AI TẠO SINH)</TableCell>
                                <TableCell align="center">CHATBOT DỰA TRÊN QUY TẮC, TỪ KHÓA</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {row.a}
                                    </TableCell>
                                    <TableCell align="center">{row.b}</TableCell>
                                    <TableCell align="center">{row.c}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <List sx={{ listStyleType: 'disc', display: 'flex', flexDirection: 'row', mt: 8 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 4, mr: 4, alignItems: 'center' }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <b>Điểm hạn chế của ChatBOT dựa trên quy tắc, từ khóa</b>: Thiếu khả năng tương tác tự nhiên: Chatbot dựa trên kịch bản cố định nên không thể hiểu và phản hồi các câu hỏi phức tạp, mơ hồ hoặc nằm ngoài kịch bản, thiếu sự linh hoạt và cá nhân hóa.
                        </ListItem>
                        <img src={process.env.PUBLIC_URL + '/images/zero3.png'}
                            style={{ width: '50vh', borderRadius: 12 }}
                            alt='zero3' />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 4, mr: 4, alignItems: 'center' }}>
                        <ListItem sx={{ display: 'list-item' }}>
                            <b>ZERO CHAT hoạt động bởi Generative AI</b>: Có thể cá nhân hóa các câu trả lời dựa trên thông tin về người dùng, lịch sử trò chuyện và ngữ cảnh cụ thể của cuộc trò chuyện. ChatBOT hiểu và có khả năng giao tiếp tự nhiên.
                        </ListItem>
                        <img src={process.env.PUBLIC_URL + '/images/zero4.png'}
                            style={{ width: '50vh', borderRadius: 12 }}
                            alt='zero4' />
                    </Box>
                </List>
            </Box>

            <Box sx={{ mt: 12 }}>
                <Typography style={{ color: maincolor, fontSize: 28, fontWeight: 'bold' }}>
                    CÁCH THỨC HOẠT ĐỘNG CỦA ZERO CHAT
                </Typography>

                <Typography style={{ marginTop: 12, fontWeight: 'bold' }}>
                    RAG là viết tắt của Retrieval Augmented Generation. Đây là một kỹ thuật tiên tiến được sử dụng trong ChatBOT của ZERO CHAT để nâng cao khả năng đàm thoại và cung cấp thông tin chính xác cho người dùng.
                    Cách thức hoạt động:
                </Typography>

                <List sx={{ listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>Lưu trữ dữ liệu</b>: RAG hoạt động bằng cách lưu trữ dữ liệu được nạp cho từng Agent AI. Mỗi Agent Chatbot của ZERO CHAT sẽ có một khu vực RAG riêng biệt, bao gồm một hoặc nhiều bộ sưu tập kiến ​​thức đa dạng.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>Truy xuất thông tin</b>: Khi người dùng đặt câu hỏi cho ChatBOT, RAG sẽ truy cập kho dữ liệu được lưu trữ và tìm kiếm thông tin có liên quan nhất. Quá trình này diễn ra nhanh chóng và hiệu quả, giúp Chatbot đưa ra câu trả lời chính xác và phù hợp.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>Tạo câu trả lời</b>: Sau khi truy xuất được thông tin, RAG sẽ kết hợp dữ liệu đó với kiến ​​thức xã hội sẵn có để tạo ra câu trả lời tự nhiên và mạch lạc cho người dùng.
                    </ListItem>
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={process.env.PUBLIC_URL + '/images/zero5.png'}
                        style={{ width: '100vh', borderRadius: 12 }}
                        alt='zero5' />
                </Box>
            </Box>

            <Box sx={{ mt: 12 }}>
                <Typography style={{ color: maincolor, fontSize: 28, fontWeight: 'bold' }}>
                    ƯU ĐIỂM CỦA RAG (Khả năng xử lý dữ liệu theo thời gian thực)
                </Typography>

                <List sx={{ listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>Xử lý dữ liệu theo nhóm nhỏ</b>: Việc chia dữ liệu thành các nhóm nhỏ của ZERO CHAT giúp ChatBOT có thể tìm kiếm và tăng tốc xử lý dữ liệu nhanh chóng hơn. Thu hẹp phạm vi tìm kiếm giúp tăng hiệu quả và độ chính xác của kết quả.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>Cập nhật từng phần dữ liệu trong nhóm</b>: RAG có thể cập nhật từng phần dữ liệu trong nhóm mà không ảnh hưởng đến các phần khác. Điều này giúp đảm bảo tính toàn vẹn dữ liệu.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>Nâng cao tính linh hoạt</b>: Khả năng xử lý dữ liệu theo thời gian thực giúp ChatBot có thể thích ứng với những thay đổi về dữ liệu một cách nhanh chóng.
                    </ListItem>
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <img src={process.env.PUBLIC_URL + '/images/zero6.png'}
                        style={{ width: '80vh', borderRadius: 12 }}
                        alt='zero6' />

                    <img src={process.env.PUBLIC_URL + '/images/zero7.png'}
                        style={{ width: '80vh', borderRadius: 12 }}
                        alt='zero7' />
                </Box>
            </Box>

            <Box sx={{ mt: 12 }}>
                <Typography style={{ color: maincolor, fontSize: 28, fontWeight: 'bold' }}>
                    ĐIỂM NỔI BẬT CỦA ZERO CHAT
                </Typography>

                <List sx={{ listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>ZERO CHAT có tính năng Quản lý tập tin</b>: hỗ trợ lưu trữ nhiều loại tệp tin như ảnh, video, tài liệu docx, pdf và các định dạng phổ biến khác. Ngoài khả năng trả lời văn bản, các ChatBOT của ZERO CHAT còn có thể minh họa và làm rõ thông tin bằng cách hiển thị ảnh, video sản phẩm và nhiều nội dung đa phương tiện khác.
                    </ListItem>
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <img src={process.env.PUBLIC_URL + '/images/zero8.png'}
                        style={{ width: '80vh', borderRadius: 12 }}
                        alt='zero8' />
                    <img src={process.env.PUBLIC_URL + '/images/zero9.png'}
                        style={{
                            width: '40vh',
                            borderRadius: 12
                        }}
                        alt='zero9' />
                </Box>
            </Box>

            <Box sx={{ mt: 12 }}>
                <Typography style={{ color: maincolor, fontSize: 28, fontWeight: 'bold' }}>
                    LỢI ÍCH KHI SỬ DỤNG CHATBOT AI BỞI ZERO CHAT
                </Typography>

                <List sx={{ listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>Nâng tầm trải nghiệm khách hàng</b>: Nâng tầm trải nghiệm khách hàng.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>Nâng cao năng suất của nhân viên</b>: Các mô hình AI tạo sinh có thể tăng cường quy trình làm việc của nhân viên và đóng vai trò là trợ lý hiệu quả cho tất cả mọi người trong tổ chức của bạn. Mô hình có thể làm mọi thứ từ tìm kiếm đến sáng tạo theo cách giống con người.
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <b>Với AI tạo sinh của ZERO CHAT</b>: doanh nghiệp của bạn có thể tối ưu hóa các quy trình kinh doanh bằng cách sử dụng và ứng dụng AI trên tất cả các lĩnh vực kinh doanh. Ví dụ, có thể áp dụng công nghệ này trên tất cả các lĩnh vực kinh doanh bao gồm kỹ thuật, tiếp thị, dịch vụ khách hàng, tài chính và bán hàng….
                    </ListItem>
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={process.env.PUBLIC_URL + '/images/zero10.png'}
                        style={{ width: '50vh', borderRadius: 12 }}
                        alt='zero10' />
                </Box>
            </Box>
        </Box>
    }

    return (
        <React.Fragment>
            <Toolbar id="back-to-top-anchor" />
            <Container>
                {/* {renderSection()} */}
                {renderHomeIntro()}
                {renderHomeContentZeroChat()}
                {/* <RichTextEditor
                    ref={rteRef}
                    content={exampleContent}
                    extensions={extensions}
                    renderControls={() => controls}>
                    {() => editors}
                </RichTextEditor>

                <Button onClick={() => setHtmlResult(rteRef.current?.editor?.getHTML() ?? "")}>
                    Save and display HTML
                </Button>
                {htmlResult && (
                    <pre style={{ marginTop: 10, overflow: "scroll", maxWidth: "100%" }}>
                        <code>{htmlResult}</code>
                    </pre>
                )} */}

            </Container>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    )
}

