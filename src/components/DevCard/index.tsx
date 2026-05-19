import { Text, View } from "react-native"
import { styles } from "./styles";
import { Form } from "../../app/cadastro";

type Props = {
    data: Form
}

const CHIP_COLORS = [
  "#e056fd", // Purple
  "#ff7979", // Red
  "#ffbe76", // Orange
  "#10ac84", // Green
  "#2e86de", // Blue
  "#00d2d3", // Cyan
  "#feca57", // Yellow
  "#ff9ff3", // Pink
];

function getExperienceBadge(exp: number) {
  const experienceNum = Number(exp);
  if (experienceNum <= 2) {
    return {
      label: "Júnior",
      backgroundColor: "#8E8E93",
      textColor: "#FFFFFF"
    };
  } else if (experienceNum <= 5) {
    return {
      label: "Pleno",
      backgroundColor: "#007AFF",
      textColor: "#FFFFFF"
    };
  } else {
    return {
      label: "Sênior",
      backgroundColor: "#FFC107",
      textColor: "#4C3600"
    };
  }
}

export function DevCard({ data }: Props){
    const badge = getExperienceBadge(Number(data.experience));
    const techTags = data.technologies
      ? data.technologies.split(",").map(t => t.trim()).filter(t => t.length > 0)
      : [];

    return (
        <View style={[styles.cardContainer, {backgroundColor: data.cardColor || "#4446f0"}]} >
            <View style={styles.cardAvatarContainer}>
                <View style={styles.cardAvatarSubContainer}>
                    {data.fullName.length > 0 && <Text style={[styles.cardAvatarLetter, { color: data.cardColor || "#4446f0" }]}>{data.fullName.charAt(0)}</Text>}
                </View>
            </View>
        
            <View style={styles.cardTextGroup}>
                <Text style={styles.cardTitle}>{data.fullName}</Text>
                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardText}>{data.role}</Text>
                    {!!data.company && <Text style={styles.cardSubtitle}>{data.company}</Text>}
                </View>
            </View>
        
            <View style={styles.cardSeparator} />
        
            <View style={styles.cardTextGroup}>
                <Text style={styles.cardSubtitle}>Especialista em</Text>
                <Text style={styles.cardRole}>{data.technology}</Text>
            </View>

            {techTags.length > 0 && (
                <View style={styles.tagsContainer}>
                    {techTags.map((tech, index) => (
                        <View 
                            key={index} 
                            style={[
                                styles.tagChip, 
                                { backgroundColor: CHIP_COLORS[index % CHIP_COLORS.length] }
                            ]}
                        >
                            <Text style={styles.tagText}>{tech}</Text>
                        </View>
                    ))}
                </View>
            )}
        
            <View style={[styles.cardBadgeContainer, { backgroundColor: badge.backgroundColor, marginTop: 8 }]}>
                <Text style={[styles.cardBadgeText, { color: badge.textColor }]}>{badge.label}</Text>
            </View>
        
            <Text style={styles.cardSubtitle}>{data.experience} {Number(data.experience) === 1 ? 'ano' : 'anos'} de experiência</Text>
        </View>
    );
}


