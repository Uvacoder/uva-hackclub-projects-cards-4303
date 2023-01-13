import {
    BaseStyles,
    Badge,
    Box,
    Button,
    Card,
    Checkbox,
    Container,
    Flex,
    Grid,
    Heading,
    Input,
    Label,
    Link,
    NavLink,
    Radio,
    Select,
    Slider,
    Text,
    Textarea
} from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import theme from '@hackclub/theme'
import ColorSwitcher from '../../components/color-switcher'
import Icon from '@hackclub/icons'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'


const ProjectPage = () => {
    const router = useRouter();
    const [gameId, setGameId] = useState('');
    useEffect(() => {
        setGameId(window.location.href.split('/')[window.location.href.split('/').length - 1]);
    }, [gameId])
    return (
    <>
        <Head>
        <title>Project Explorer</title>
        <Meta
            name="Explorer"
            description="Explore the projects from uvacoder."
        />
        </Head>
        <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
        <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
            <ColorSwitcher />
            <Heading as="h1" variant="title" color="red">
            <Link href="/">
                <Icon glyph="view-back" size={64} style={{ verticalAlign: 'bottom' }} />
            </Link> Game Title
            </Heading>
            <Text as="p" variant="subtitle" mt={3}>
            Game description goes here.
            </Text>
            <Grid
            gap={4}
            columns="auto auto auto"
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 2,
                mt: 3,
                mb: 4,
                a: { color: 'muted', transition: 'color .125s ease-in-out' }
            }}
            >
            <NavLink href="https://github.com/uvacoder">GitHub</NavLink>
            <NavLink href="#">
                Link 2
            </NavLink>
            <NavLink href="#">
                Link 3
            </NavLink>
            </Grid>
        </Container>
        </Box>
        <Box
        as="main"
        sx={{ bg: 'background', color: 'text', py: 4, h2: { mt: 4 } }}
        >
            <iframe src={gameId ? ( "https://hackclub.github.io/game-lab/?file=" + gameId ) : ''} style={{
                width: '100%',
                border: 'none',
                margin: '0px',
                padding: '0px',
                height: 'calc( 100vh - 360px )',
                minHeight: '400px'
            }}></iframe>
        </Box>
    </>
    );
}

export default ProjectPage
