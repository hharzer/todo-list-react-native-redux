import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
  text: () => ({
    ...EStyleSheet.value('$fonts.ralewayBold'),
    fontSize: 30,
  }),
  facebookPrimaryColor: () => EStyleSheet.value('$colors.denimBlue'),
  facebookActiveColor: () => EStyleSheet.value('$colors.darkSlateBlueTwo'),
  twitterPrimaryColor: () => EStyleSheet.value('$colors.robinsEgg'),
  twitterActiveColor: () => EStyleSheet.value('$colors.darkSkyBlueTwo'),
  googlePrimaryColor: () => EStyleSheet.value('$colors.nasturcianFlower'),
  googleActiveColor: () => EStyleSheet.value('$colors.harleyDavidsonFlower'),
  emailPrimaryColor: () => EStyleSheet.value('$colors.riseNShine'),
  emailActiveColor: () => EStyleSheet.value('$colors.nanohanachaGold'),
})
