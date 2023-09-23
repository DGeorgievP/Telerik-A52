// Students graduation

/**
 * 
 * @param {{ course: string, passingGrade: number, students: Array<{id: number, name: string}>, grades: Array<{ studentId: number, grade: number}>, exams: Array<{ studentId: number, grade: number }>} data 
 */
export default function (data) {
  // your code starts here
  const graduates = []
  const nonGraduates = []
  const studentsGraduates = data.students.map((student) => {
    const grades = data.grades.filter((grade) => {
      if (student.name === grade.studentName || student.id === grade.studentId) {
        return grade.grade
      }
    })

    const gradeCalculation = grades.reduce((acc, el) => {
      acc += el.grade
      return acc
    }, 0)

    const gradeAverage = gradeCalculation / grades.length
    const finalGrading = gradeAverage * 0.40

    const gradesFromExams = data.exams.filter((grade) => {
      if (student.name === grade.studentName || student.id === grade.studentId) {
        return grade.grade
      }
    })
    const gradesExamSum = gradesFromExams.reduce((acc, el) => {
      acc += el.grade
      return acc
    }, 0)

    let finalExamGrading = 0
    if (gradesExamSum > 0) {
      const examAverage = gradesExamSum / gradesFromExams.length
      finalExamGrading = examAverage * 0.60
    }

    //console.log('gradesExaSum', gradesExamSum)
    //console.log('examAverage', examAverage)

    const gradeResults = finalGrading + finalExamGrading

    if (gradeResults >= data.passingGrade && gradesFromExams.length >= 2) {
      const studentGraduate = {
        id: student.id,
        name: student.name,
        grade: gradeResults
      }
      graduates.push(studentGraduate)
    } else {
      console.log('gradeResult', gradeResults, student.name)
      if (gradesFromExams.length < 2 && gradeResults < data.passingGrade) {
        const nonGraduate = {
          id: student.id,
          name: student.name,
          reason: 'score and exams'
        }
        nonGraduates.push(nonGraduate)
      } else if (gradesFromExams.length >= 2 && gradeResults < data.passingGrade) {
        const nonGraduate = {
          id: student.id,
          name: student.name,
          reason: 'score'
        }
        nonGraduates.push(nonGraduate)
      } else {
        const nonGraduate = {
          id: student.id,
          name: student.name,
          reason: 'exams'
        }
        nonGraduates.push(nonGraduate)
      }
    }
  })
  const GraduationCorse = {
    name: data.course,
    graduates,
    nonGraduates
  }
  return GraduationCorse
  // your code ends here
}