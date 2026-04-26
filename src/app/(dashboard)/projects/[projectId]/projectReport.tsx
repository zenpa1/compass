import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Project } from "@/app/(dashboard)/projects/projectDataOps";
import { Work } from "@/app/(dashboard)/projects/[projectId]/workDataOps";
import toShortHours from "@/app/(dashboard)/projects/[projectId]/workMiscOps";
import {
  UserProfile,
  User,
  Assignment,
} from "@/app/(dashboard)/projects/[projectId]/assignmentDataOps";

interface ProjectPdfTemplateProps {
  projects: pdfWorks[];
  printStartDate: Date;
  printEndDate: Date;
}

const styles = StyleSheet.create({
  page: { 
    paddingTop: 40, 
    paddingLeft: 40, 
    paddingRight: 40, 
    paddingBottom: 60,
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: '#334155'
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 20, color: '#0f172a' },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', marginTop: 20, marginBottom: 8, color: '#475569', textTransform: 'uppercase' },
  projectWrapper: { marginBottom: 30 },
  
  // Table General
  table: { width: '100%',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#e2e8f0', },
  tableRow: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#e2e8f0', minHeight: 22, alignItems: 'stretch' },
  fullWidthHeader: {
    width: '100%',
    backgroundColor: '#f8fafc',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 6
  },
  
  // Project Info Table (2 columns)
  infoKey: { width: '30%', backgroundColor: '#f8fafc', padding: 6, fontWeight: 'bold', borderRightWidth: 1, borderRightColor: '#e2e8f0' },
  infoValue: { width: '70%', padding: 6 },

  // Works Table Headers
  headerCell: { backgroundColor: '#f1f5f9', fontWeight: 'bold', padding: 6, borderRightWidth: 1, borderRightColor: '#e2e8f0' },
  dataCell: { padding: 6, borderRightWidth: 1, borderRightColor: '#e2e8f0' },
  
  // Works Column Widths
  colRole: { width: '25%' },
  colSched: { width: '30%' },
  colAssignee: { width: '25%' },
  colStatus: { width: '20%', borderRightWidth: 0 }, // Remove last right border
});

type enrichedWorks = {
  work: Work;
  printedAssignee: string;
  printedStatus: string;
  availableAssignees: Assignee[];
  recommendedAssignees: Assignee[];
  applications: Assignee[];
  assignment: Assignment;
};

type Assignee = {
  userProfile: UserProfile;
  user: User;
};

type pdfWorks = {
    project: Project,
    works: enrichedWorks[]
}

const formatWorkSchedule = (work: Work) => {
    if (work.work_start_time == null || work.work_end_time == null) {
      return `${work.work_start_date?.toLocaleDateString()}, TBA`;
    }

    return (
      `${work.work_start_date?.toLocaleDateString()}, ` +
      `${toShortHours(work.work_start_time?.getHours() ?? 0)}-` +
      `${toShortHours(work.work_end_time?.getHours() ?? 0)}`
    );
};

export const ProjectPdfTemplate = ({ 
  projects, 
  printStartDate, 
  printEndDate 
}: ProjectPdfTemplateProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
        <View>
            <Text style={styles.title}>
                Report of Projects from {printStartDate.toLocaleDateString()} to {printEndDate.toLocaleDateString()}
            </Text>
        </View>
        {projects.map((project) => (
            <View key={project.project.project_id} style={styles.projectWrapper}>
                <View style={styles.table}>
                    <View style={styles.tableRow} wrap={false}>
                        <Text style={styles.infoKey}>Project Name</Text>
                        <Text style={styles.infoValue}>{project.project.project_name}</Text>
                    </View>
                    <View style={styles.tableRow} wrap={false}>
                        <Text style={styles.infoKey}>Client Name</Text>
                        <Text style={styles.infoValue}>{project.project.client_name}</Text>
                    </View>
                    <View style={styles.tableRow} wrap={false}>
                        <Text style={styles.infoKey}>Date Range</Text>
                        <Text style={styles.infoValue}>
                            {project.project.project_start_date.toLocaleDateString()} - {project.project.project_end_date.toLocaleDateString()}
                        </Text>
                    </View>
                    <View style={styles.tableRow} wrap={false}>
                        <Text style={styles.infoKey}>Project Location</Text>
                        <Text style={styles.infoValue}>{project.project.project_location}</Text>
                    </View>
                    <View style={styles.tableRow} wrap={false}>
                        <Text style={styles.infoKey}>Project Description</Text>
                        <Text style={styles.infoValue}>{project.project.project_description}</Text>
                    </View>


                    {
                        (project.works.length != 0) ? (
                            //Works Header
                            <View>
                                <View style={styles.fullWidthHeader} wrap={false}>
                                    <Text>Project Works</Text>
                                </View>
                                <View style={styles.tableRow} wrap={false}>
                                    <View style={[styles.headerCell, styles.colRole]}><Text>Role</Text></View>
                                    <View style={[styles.headerCell, styles.colSched]}><Text>Schedule</Text></View>
                                    <View style={[styles.headerCell, styles.colAssignee]}><Text>Assignee</Text></View>
                                    <View style={[styles.headerCell, styles.colStatus]}><Text>Status</Text></View>
                                </View>

                                {/* Rows */}
                                {project.works.map((work) => (
                                <View key={work.work.work_id} style={[styles.tableRow]} wrap={false}>
                                    <View style={[styles.dataCell, styles.colRole]}><Text>{work.work.project_role}</Text></View>
                                    <View style={[styles.dataCell, styles.colSched]}>
                                        <Text>{formatWorkSchedule(work.work)}</Text>
                                    </View>
                                    <View style={[styles.dataCell, styles.colAssignee]}><Text>{work.printedAssignee}</Text></View>
                                    <View style={[styles.dataCell, styles.colStatus]}><Text>{work.printedStatus.substring(2)}</Text></View>
                                </View>
                                ))}
                            </View>
                        ) : null
                    }
                </View>
            </View>
        ))}
    </Page>
  </Document>
);