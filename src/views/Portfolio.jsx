import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Paper, TextField, Box } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Instagram } from "@mui/icons-material";

const Portfolio = () => {
    return (
        <div style={{ backgroundColor: "black", color: "white", fontFamily: "Arial, sans-serif" }}>
            <AppBar position="static" style={{ backgroundColor: "black" }}>
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>SUWIMOL HONGAON</Typography>
                    <Button color="inherit">Work</Button>
                    <Button color="inherit">About</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>


            <Container style={{ padding: "40px 0" }}>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" gutterBottom><br />HI, I AM <br />SUWIMOL</Typography><br />
                        <Typography variant="body1" color="gray">สวัสดีค่ะ ดิฉันเป็นนักพัฒนาเว็บที่ชื่นชอบการสร้างเว็บไซต์ที่ใช้งานง่ายและมีประสิทธิภาพ หลงใหลในการทำให้ผู้ใช้มีประสบการณ์ที่ดีทุกครั้งที่เข้ามาเยี่ยมชมค่ะ</Typography><br /><br />


                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Button variant="contained" style={{ backgroundColor: "#E18AAA", color: "white", borderRadius: '20px', fontSize: '18px', fontWeight: "bold" }}>
                                    CONTACT ME •
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        backgroundColor: "#E18AAA",
                                        color: "black",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 0,
                                    }}
                                >
                                    <LinkedIn sx={{ fontSize: "40px" }} />
                                </Button>
                            </Grid>

                            <Grid item>
                                <Button
                                    variant="contained"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        backgroundColor: "#E18AAA",
                                        color: "black",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 0,
                                    }}
                                >
                                    <GitHub sx={{ fontSize: "40px" }} />
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="/Profile1.jpg" alt="Profile" style={{ width: "80%", borderRadius: "10px" }} />
                    </Grid>
                </Grid>
            </Container>


            <Container style={{ padding: "40px 0", borderTop: "1px solid gray" }}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} md={2}>
                        <Typography variant="h4" gutterBottom>ABOUT ME</Typography>
                    </Grid><br />
                    <Grid item xs={12} md={10}>
                        <Typography variant="body1" color="gray" style={{ marginTop: '20px' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผมเป็นนักศึกษาที่กำลังเรียนเกี่ยวกับพัฒนาเว็บไซต์ผมเป็นนักพัฒนาเว็บไซต์และกำลังมองหาโอกาสที่น่าตื่นเต้นในการทำงาน<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบเว็บไซต์เล็กน้อยเมื่อไม่ได้เขียนโปรแกรม
                            ผมชอบเล่นเกม  <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ฟังเพลง และเล่นกีฬา และกำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ
                        </Typography>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <br /><br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button variant="contained" style={{ backgroundColor: "#E18AAA", color: "white", borderRadius: '20px', fontSize: '18px', fontWeight: "bold" }}>
                                    DOWLOAD RESUME •
                                </Button>
                            </Grid>
                            <br /><br />

                            <Grid item>
                                <br /><br />
                                <Button
                                    variant="contained"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        backgroundColor: "#E18AAA",
                                        color: "black",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 0,
                                    }}
                                >
                                    <LinkedIn sx={{ fontSize: "40px" }} />
                                </Button>
                            </Grid>

                            <Grid item><br /><br />
                                <Button
                                    variant="contained"
                                    style={{
                                        width: "60px",
                                        height: "60px",
                                        borderRadius: "50%",
                                        backgroundColor: "#E18AAA",
                                        color: "black",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: 0,
                                    }}
                                >
                                    <GitHub sx={{ fontSize: "40px" }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <br /><br />
                <Grid item xs={6} md={4}> <center>
                    <img src="/profile1.jpg" alt="Profile" style={{ width: "40%", borderRadius: "10px" }} />
                </center>
                </Grid>
            </Container>




            <Container style={{ padding: "50px 0", borderTop: "1px solid gray" }}>
                <Grid container alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom style={{ marginBottom: '20px' }}>MY CAPABILITIES</Typography>
                    </Grid>&nbsp;
                    <Grid item>
                        <Typography variant="body1" color="gray" style={{ marginTop: '10px' }}>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆ อยู่เสมอทั้งการพัฒนาฟรอนท์เอนด์ และแบล็กเอนต์ <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;การออกแบบ UX/UI ฐานข้อมูล
                        </Typography>
                    </Grid>
                </Grid>

                <br />
                <Grid container spacing={2}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{["HTML", "CSS", "JavaScript", "React", "Flutter", "Dart"].map((skill) => (
                        <Grid item key={skill}>
                            <Paper style={{ padding: "10px 20px", display: "inline-block", backgroundColor: "#E18AAA", color: "white", borderRadius: "50px" }}>
                                {skill}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

            </Container>


            <Container style={{ padding: "40px 0", borderTop: "1px solid gray" }}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Typography variant="h4" gutterBottom>MY Experience</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" color="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Freelance Developer</Typography>
                    </Grid>
                </Grid>


                <Typography variant="body1" color="gray" style={{ marginTop: '10px' }}>
                Freelance Developer คือ นักพัฒนาซอฟต์แวร์ที่ทำงานแบบอิสระ ไม่ผูกพันกับบริษัทใด ๆ โดยจะรับงานโปรเจ็กต์จากลูกค้าหรือบริษัทต่าง ๆ ตามความสามารถที่มี เช่น การพัฒนาเว็บไซต์ แอปพลิเคชัน หรือระบบต่าง ๆ โดยสามารถทำงานจากที่ไหนก็ได้ และมีความยืดหยุ่นในเวลาและการจัดการงาน
                </Typography>

                <br />
            </Container>

            <Container style={{ padding: "40px 0", borderTop: "1px solid gray" }}>
                <Grid container spacing={4} alignItems="center">

                    <Grid item xs={12} md={5}><br /><br /><br />
                        <Typography variant="h3" fontWeight="bold">LET'S CONNECT</Typography>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Say hello at <a href="s6452410013@sau.ac.th" style={{ color: "#E18AAA" }}>s6452410013@sau.ac.th</a>
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            For more info, here's my <a href="#" style={{ color: "#E18AAA" }}>resume</a>
                        </Typography>
                        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                            <LinkedIn sx={{ color: "#E18AAA", fontSize: 30 }} />
                            <GitHub sx={{ color: "#E18AAA", fontSize: 30 }} />
                            <Twitter sx={{ color: "#E18AAA", fontSize: 30 }} />
                            <Instagram sx={{ color: "#E18AAA", fontSize: 30 }} />
                        </Box><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <Typography variant="body1" color="gray" style={{ marginTop: '10px' }}>© SUWIMOL HONGAON</Typography>

                    </Grid>

                    <Grid item xs={12} md={7}><br /><br /><br />
                        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                            <Typography variant="body1" color="gray" style={{ marginTop: '10px' }}>Name</Typography>
                            <TextField variant="filled" fullWidth InputProps={{ style: { backgroundColor: "#E18AAA", color: "#fff" } }} />
                            <Typography variant="body1" color="gray" style={{ marginTop: '10px' }}>Email</Typography>
                            <TextField variant="filled" fullWidth InputProps={{ style: { backgroundColor: "#E18AAA", color: "#fff" } }} />
                            <Typography variant="body1" color="gray" style={{ marginTop: '10px' }}>Subject</Typography>
                            <TextField variant="filled" fullWidth InputProps={{ style: { backgroundColor: "#E18AAA", color: "#fff" } }} />
                            <Typography variant="body1" color="gray" style={{ marginTop: '10px' }}>Message</Typography>
                            <TextField variant="filled" multiline rows={4} fullWidth InputProps={{ style: { backgroundColor: "#E18AAA", color: "#fff" } }} />
                        </Box><br /><br />
                        <Button variant="contained" sx={{ backgroundColor: "#E18AAA", color: "white", fontWeight: "bold", borderRadius: '50px', fontSize: '18px' }}>SUBMIT</Button>
                    </Grid>
                </Grid><br /><br />
            </Container>

        </div>
    );
};

export default Portfolio;
