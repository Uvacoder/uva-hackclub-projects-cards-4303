import {
    Container,
    Grid
} from 'theme-ui'
import theme from '@hackclub/theme'
import Project from './Project.js'

export default function ProjectDisplay ({ projects = [], children, style = {}, ...props }) {
    return (
        <Container variant="wide" style={{ background: theme.colors.blue, borderRadius: '16px', padding: '16px', margin: '16px', boxSizing: 'border-box', width: 'calc( 100% - 32px )', ...style }} {...props}>
            <Grid
            columns={[null, 2, 3]}
            gap={3}
            sx={{ code: { mt: 1, ml: -1, fontSize: 0 } }}
            >
            
                {projects.map(project => (
                    <Project
                        icon="send"
                        background="white"
                        name={project.name}
                        desc={project.description}
                        image={project.image}
                        url={project.url}
                        author={project.author}
                    />
                ))}

                {children}
            
            </Grid>
        </Container>

    );
}